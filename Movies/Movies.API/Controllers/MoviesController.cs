using Microsoft.AspNetCore.Mvc;
using Movies.Application.Features.Movies.Commands.CreateMovie;
using Movies.Application.Features.Movies.Commands.DeleteMovie;
using Movies.Application.Features.Movies.Commands.UpdateMovie;
using Movies.Application.Features.Movies.Dtos;
using Movies.Application.Features.Movies.Queries.GetMovieById;
using Movies.Application.Features.Movies.Queries.GetMovies;
using Movies.WebUI.Model.BindingModels;
using Movies.WebUI.Models.BindingModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Movies.WebUI.Controllers
{
    public class MoviesController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<MovieDto>>> GetAll([FromQuery] GetAllMoviesBindingModel getAllMoviesBm)
        {
            var response = await Mediator.Send(Mapper.Map<GetMoviesQuery>(getAllMoviesBm));

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<MovieDto>>> GetById([FromRoute] int id)
        {
            var response = await Mediator.Send(new GetMovieByIdQuery { Id = id });

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<List<int>>> Create([FromForm] CreateMovieBindingModel createMovieBm)
        {
            var response = await Mediator.Send(Mapper.Map<CreateMovieCommand>(createMovieBm));

            return Ok(response);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<List<int>>> Update([FromRoute] int? id, [FromForm] UpdateMovieBindingModel updateMovieBm)
        {
            var updateMovieCommand = Mapper.Map<UpdateMovieCommand>(updateMovieBm);
            updateMovieCommand.Id = id;

            var response = await Mediator.Send(updateMovieCommand);

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<int>>> Delete([FromRoute] int? id)
        {            
            var response = await Mediator.Send(new DeleteMovieCommand { Id = id });

            return Ok(response);
        }
    }
}
