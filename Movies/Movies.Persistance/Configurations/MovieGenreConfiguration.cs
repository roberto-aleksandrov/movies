using Microsoft.EntityFrameworkCore;
using Movies.Domain.Entities;
using System;

namespace Movies.Domain.Configurations
{
    internal class MovieGenreConfiguration : IEntityTypeConfiguration<MovieGenreEntity>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<MovieGenreEntity> builder)
        {
            builder.ToTable(nameof(MovieGenreEntity.Movie.MovieGenres));

            builder.HasKey(m => new { m.MovieId, m.GenreId });

            builder.HasOne(mg => mg.Movie)
                .WithMany(m => m.MovieGenres)
                .HasForeignKey(m => m.MovieId);

            builder.HasOne(mg => mg.Genre)
                .WithMany(g => g.MovieGenres)
                .HasForeignKey(g => g.GenreId);
        }
    }
}
