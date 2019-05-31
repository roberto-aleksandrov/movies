using Movies.Domain.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Movies.Persistance
{
    public class MoviesInitializer
    {
        private readonly Dictionary<int, GenreEntity> _roles = new Dictionary<int, GenreEntity>();

        public static void Initialize(MoviesContext context)
        {
            new MoviesInitializer().Seed(context);
        }

        public void Seed(MoviesContext context)
        {
            SeedGenres(context);
        }

        public void SeedGenres(MoviesContext context)
        {
            if (context.Genres.Any())
            {
                return;
            }                      

            var actionGenreEntity = new GenreEntity
            {
                Name = "Action"
            };
            var dramaGenreEntity = new GenreEntity
            {
                Name = "Drama"
            };

            context.Genres.Add(actionGenreEntity);

            context.SaveChanges();
            
            _roles.Add(actionGenreEntity.Id, actionGenreEntity);
            _roles.Add(dramaGenreEntity.Id, dramaGenreEntity);
        }

    }
}
