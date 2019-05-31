﻿using Movies.Application.Features.Genre.Dtos;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Movies.Application.Features.Movies.Dtos
{
    public class MovieDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public byte[] Image { get; set; }

        public DateTime? ReleaseDate { get; set; }

        public IEnumerable<GenreDto> Genres { get; set; }
    }
}
