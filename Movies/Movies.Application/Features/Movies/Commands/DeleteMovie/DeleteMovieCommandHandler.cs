using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Movies.Application.Common.Interfaces.Data;
using Movies.Application.Common.Models.Mediatr;
using Movies.Domain.Entities;

namespace Movies.Application.Features.Movies.Commands.DeleteMovie
{
    public class DeleteMovieCommandHandler : BaseRequestHandler<DeleteMovieCommand, MovieEntity>
    {
        public DeleteMovieCommandHandler(IData data, IMapper mapper) 
            : base(data, mapper)
        {
        }

        public override async Task<MovieEntity> Handle(DeleteMovieCommand request, CancellationToken cancellationToken)
        {
            var movieEntity = await _data.Movies.GetByIdAsync(request.Id.Value);

            await _data.Movies.DeleteAsync(movieEntity);

            return movieEntity;
        }
    }
}
