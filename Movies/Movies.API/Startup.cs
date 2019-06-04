using AutoMapper;
using FluentValidation.AspNetCore;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Movies.Application.Common.AutoMapper;
using Movies.Application.Common.Interfaces.Data;
using Movies.Application.Common.Middlewares;
using Movies.Application.Features.Movies.Commands.CreateMovie;
using Movies.Domain.Entities;
using Movies.Infrastructure.Data;
using Movies.Infrastructure.Mediator;
using Movies.Infrastructure.Mediator.Interfaces;
using Movies.Persistance;
using Movies.Persistance.Data;
using Movies.WebUI.AutoMapper;
using Movies.WebUI.Filters;
using Swashbuckle.AspNetCore.Swagger;
using System.Reflection;

namespace Movies.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(sharedOptions =>
            {
                sharedOptions.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.Audience = Configuration["AzureAd:ClientId"];
                options.Authority = $"{Configuration["AzureAd:Instance"]}{Configuration["AzureAd:TenantId"]}";
            });

            services.AddCors(options =>
               options.AddPolicy("default",
                builder =>
                {
                    builder.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                }));

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddAutoMapper(new Assembly[] { typeof(BmToRequestProfile).GetTypeInfo().Assembly, typeof(QueryToSpecProfile).GetTypeInfo().Assembly });

            RegisterDbContext(services);
            RegisterRepositories(services);
            RegisterInfrastructure(services);
            RegisterMediator(services);

            services.AddTransient<IData, MoviesData>();

            services.AddMvc(options =>
            {
                options.Filters.Add(typeof(CustomExceptionFilterAttribute));
            })
            .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
            .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<CreateMovieCommandValidator>());

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Swagger");
                c.RoutePrefix = string.Empty;
            });

            app.UseAuthentication();
            app.UseCors("default");
            app.UseMvc();
        }

        private void RegisterMediator(IServiceCollection services)
        {
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestValidationBehavior<,>));
            services.AddMediatR(typeof(CreateMovieCommandHandler).GetTypeInfo().Assembly);
        }

        private void RegisterRepositories(IServiceCollection services)
        {
            services.AddTransient<IAsyncRepository<UserEntity>, EfRepository<UserEntity>>();
            services.AddTransient<IAsyncRepository<MovieEntity>, EfRepository<MovieEntity>>();
            services.AddTransient<IAsyncRepository<GenreEntity>, EfRepository<GenreEntity>>();
            services.AddTransient<IAsyncRepository<MovieGenreEntity>, EfRepository<MovieGenreEntity>>();
        }

        private void RegisterDbContext(IServiceCollection services)
        {
            services.AddDbContext<MoviesContext>(c =>
               c.UseSqlServer(Configuration.GetConnectionString("MoviesConnection")));
        }

        private void RegisterInfrastructure(IServiceCollection services)
        {
            services.AddTransient<IPersistableMediator, PersistableMediator>();
        }
    }
}
