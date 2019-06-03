using AutoMapper;
using Movies.API.Models.BindingModels;
using Movies.Application.Features.Genre.Queries.GetAllGenres;
using Movies.Application.Features.Movies.Commands.CreateMovie;
using Movies.Application.Features.Movies.Commands.UpdateMovie;
using Movies.Application.Features.Movies.Queries.GetMovies;
using Movies.WebUI.AutoMapper.Converters;
using Movies.WebUI.Model.BindingModels;
using Movies.WebUI.Models.BindingModels;

namespace Movies.WebUI.AutoMapper
{
    public class BmToRequestProfile : Profile
    {
        public BmToRequestProfile()
        {
            AllowNullCollections = true;

            CreateMap<CreateMovieBindingModel, CreateMovieCommand>()
                .ForMember(req => req.Image, opt => opt.ConvertUsing(new FormFileToByteArrayConverter()));

            CreateMap<UpdateMovieBindingModel, UpdateMovieCommand>()
                .ForMember(req => req.Image, opt => opt.ConvertUsing(new FormFileToByteArrayConverter()));

            CreateMap<GetAllMoviesBindingModel, GetMoviesQuery>();

            CreateMap<GetAllGenresBindingModel, GetAllGenresQuery>();
        }
    }
}
