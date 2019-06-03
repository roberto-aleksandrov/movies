using Movies.Application.Common.Models.Mediatr;
using Movies.Application.Features.Genre.Dtos;
using System.Collections.Generic;

namespace Movies.Application.Features.Genre.Queries.GetAllGenres
{
    public class GetAllGenresQuery : BaseQuery<IEnumerable<GenreDto>>
    {
    }
}
