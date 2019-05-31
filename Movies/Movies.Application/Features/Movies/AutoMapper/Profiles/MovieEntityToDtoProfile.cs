using AutoMapper;
using Movies.Application.Features.Movies.Dtos;
using Movies.Domain.Entities;
using System.Linq;

namespace Movies.Application.Features.Movies.AutoMapper.Profiles
{
    public class MovieEntityToDtoProfile : Profile
    {
        public MovieEntityToDtoProfile() 
        {
            CreateMap<MovieEntity, MovieDto>()
                .ForMember(e => e.Genres, opt => opt.MapFrom(dto => dto.MovieGenres.Select(n => n.Genre)));
        }
    }
}
