using AutoMapper;
using Movies.Application.Common.Interfaces.Data;
using Movies.Application.Common.Models.Mediatr;
using Movies.Application.Features.Genre.Specifications;
using Movies.Application.Features.Movies.Specifications;
using Movies.Domain.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace Movies.Application.Features.MovieGenre.Commands
{
    public class CreateMovieGenreCommandHandler : BaseRequestHandler<CreateMovieGenreCommand, MovieGenreEntity>
    {
        public CreateMovieGenreCommandHandler(IData data, IMapper mapper)
            : base(data, mapper)
        {
        }

        public override async Task<MovieGenreEntity> Handle(CreateMovieGenreCommand request, CancellationToken cancellationToken)
        {
            var movieEntity = await _data.Movies.SingleAsync(new GetMovieSpecification(request.MovieId) { IncludeUncommited = true });

            var genreEntity = await _data.Genres.SingleAsync(new GetGenresSpecification(request.GenreId) { IncludeUncommited = true });

            var movieGenreEntity = new MovieGenreEntity
            {
                Movie = movieEntity,
                Genre = genreEntity
            };

            await _data.MovieGenres.AddAsync(movieGenreEntity);

            return movieGenreEntity;
        }
    }
}
