using Microsoft.EntityFrameworkCore;
using Movies.Domain.Entities;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Movies.Persistance
{
    public class MoviesContext : DbContext
    {
        public MoviesContext(DbContextOptions<MoviesContext> options)
            : base(options) { }

        public DbSet<UserEntity> Users { get; set; }

        public DbSet<MovieEntity> Movies { get; set; }

        public DbSet<GenreEntity> Genres { get; set; }

        public DbSet<MovieGenreEntity> MovieGenres { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(typeof(MoviesContext).Assembly);
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default(CancellationToken))
        {
            var createdEntities = ChangeTracker.Entries().Where(E => E.State == EntityState.Added).ToList();

            createdEntities.ForEach(e =>
            {
                var now = DateTime.Now;
                e.Property(nameof(BaseEntity.CreationDate)).CurrentValue = now;
                e.Property(nameof(BaseEntity.UpdateDate)).CurrentValue = now;
            });

            var editedEntities = ChangeTracker.Entries().Where(E => E.State == EntityState.Modified).ToList();

            editedEntities.ForEach(e =>
            {
                e.Property(nameof(BaseEntity.UpdateDate)).CurrentValue = DateTime.Now;
            });

            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }
    }
}
