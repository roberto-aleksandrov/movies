using AutoMapper;
using Extensions;
using MediatR;
using Movies.Application.Common.Interfaces.Data;
using Movies.Application.Common.Models.Mediatr;
using Movies.Application.Features.MovieGenre.Commands;
using Movies.Domain.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace Movies.Application.Features.Movies.Commands.CreateMovie
{
    public class CreateMovieCommandHandler : BaseRequestHandler<CreateMovieCommand, MovieEntity>
    {  
        private readonly IMediator _mediator;

        public CreateMovieCommandHandler(IData data, IMapper mapper, IMediator mediator)
            : base(data, mapper)
        {
            _mediator = mediator;
        }

        public override async Task<MovieEntity> Handle(CreateMovieCommand request, CancellationToken cancellationToken)
        {
            var movieEntity = _mapper.Map<MovieEntity>(request);

            await _data.Movies.AddAsync(movieEntity);

            await request.GenreIds.ForEachAsync(async n => await _mediator.Send(new CreateMovieGenreCommand
            {
                MovieId = movieEntity.Id,
                GenreId = n
            }));

            return movieEntity;
        }
    }
}
