using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Movies.Infrastructure.Mediator.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace Movies.WebUI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class BaseController : Controller
    {
        private IPersistableMediator _mediator;
        private IMapper _mapper;

        protected IPersistableMediator Mediator => _mediator ?? (_mediator = HttpContext.RequestServices.GetService<IPersistableMediator>());

        protected IMapper Mapper => _mapper ?? (_mapper = HttpContext.RequestServices.GetService<IMapper>());
    }
}
