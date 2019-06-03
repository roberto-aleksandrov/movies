using Microsoft.AspNetCore.Mvc;
using Movies.API.Models.BindingModels;
using Movies.Application.Features.Genre.Dtos;
using Movies.Application.Features.Genre.Queries.GetAllGenres;
using Movies.WebUI.Controllers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Movies.API.Controllers
{
    public class GenresController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<GenreDto>>> GetAll([FromQuery] GetAllGenresBindingModel getAllMoviesBm)
        {
            var response = await Mediator.Send(Mapper.Map<GetAllGenresQuery>(getAllMoviesBm));

            return Ok(response);
        }
    }
}
