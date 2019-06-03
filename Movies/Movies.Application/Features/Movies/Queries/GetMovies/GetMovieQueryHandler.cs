using AutoMapper;
using Movies.Application.Common.Interfaces.Data;
using Movies.Application.Common.Models.Mediatr;
using Movies.Application.Common.Spcifications;
using Movies.Application.Features.Movies.Dtos;
using Movies.Domain.Entities;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Movies.Application.Features.Movies.Queries.GetMovies
{
    public class GetMovieQueryHandler : BaseRequestHandler<GetMoviesQuery, IEnumerable<MovieDto>>
    {
        public GetMovieQueryHandler(IData data, IMapper mapper)
            : base(data, mapper)
        {
        }

        public override async Task<IEnumerable<MovieDto>> Handle(GetMoviesQuery request, CancellationToken cancellationToken)
        {
            var spec = _mapper.Map<BaseSpecification<MovieEntity>>(request);

            var movieEntities = await _data.Movies.ListAsync(spec);

            return _mapper.Map<IEnumerable<MovieDto>>(movieEntities);
        }
    }
}
