using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Movies.WebUI.Model.BindingModels
{
    public class UpdateMovieBindingModel
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime? ReleaseDate { get; set; }

        public IFormFile Image { get; set; }
    }
}
