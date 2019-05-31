using System;
using System.Collections.Generic;

namespace Movies.Domain.Entities
{
    public class MovieEntity : BaseEntity
    {
        public MovieEntity()
        {
            MovieGenres = new List<MovieGenreEntity>();
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public byte[] Image { get; set; }

        public DateTime? ReleaseDate { get; set; }

        public virtual ICollection<MovieGenreEntity> MovieGenres { get; set; }
    }
}
