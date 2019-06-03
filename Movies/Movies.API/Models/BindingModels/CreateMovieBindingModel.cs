using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;

namespace Movies.WebUI.Models.BindingModels
{
    public class CreateMovieBindingModel
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime? ReleaseDate { get; set; }

        public IFormFile Image { get; set; }

        public IEnumerable<int>  GenreIds { get; set; }
    }
}
