using System.Collections.Generic;

namespace Movies.Domain.Entities
{
    public class GenreEntity : BaseEntity
    {
        public GenreEntity()
        {
            MovieGenres = new List<MovieGenreEntity>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public virtual ICollection<MovieGenreEntity> MovieGenres { get; set; }
    }
}
