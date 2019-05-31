using Movies.Application.Common.Spcifications;
using Movies.Domain.Entities;

namespace Movies.Application.Features.Genre.Specifications
{
    public class GetGenresSpecification : BaseSpecification<GenreEntity>
    {
        public GetGenresSpecification(int id)
            : base(n => n.Id == id)
        {
        }
    }
}
