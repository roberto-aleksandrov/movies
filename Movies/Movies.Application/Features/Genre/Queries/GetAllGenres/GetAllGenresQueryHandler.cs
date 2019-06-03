using AutoMapper;
using Movies.Application.Common.Interfaces.Data;
using Movies.Application.Common.Models.Mediatr;
using Movies.Application.Features.Genre.Dtos;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Movies.Application.Features.Genre.Queries.GetAllGenres
{
    public class GetAllGenresQueryHandler : BaseRequestHandler<GetAllGenresQuery, IEnumerable<GenreDto>>
    {
        public GetAllGenresQueryHandler(IData data, IMapper mapper)
            : base(data, mapper)
        {
        }

        public override async Task<IEnumerable<GenreDto>> Handle(GetAllGenresQuery request, CancellationToken cancellationToken)
        {
            var genreEntities = await _data.Genres.ListAllAsync();

            return _mapper.Map<IEnumerable<GenreDto>>(genreEntities);
        }
    }
}
