using Movies.Application.Common.Spcifications;
using Movies.Domain.Entities;

namespace Movies.Application.Features.Movies.Specifications
{
    public class GetMovieSpecification : BaseSpecification<MovieEntity>
    {
        public GetMovieSpecification(int id)
            : base(n => n.Id == id)
        {
        }
    }
}
