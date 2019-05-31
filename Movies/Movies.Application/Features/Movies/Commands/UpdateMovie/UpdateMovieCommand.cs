using Movies.Application.Features.Movies.Models;

namespace Movies.Application.Features.Movies.Commands.UpdateMovie
{
    public class UpdateMovieCommand : UpsertMovieCommand
    {
        public int? Id { get; set; }
    }
}
