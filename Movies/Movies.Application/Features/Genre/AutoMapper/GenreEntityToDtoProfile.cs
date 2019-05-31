using AutoMapper;
using Movies.Application.Features.Genre.Dtos;
using Movies.Domain.Entities;

namespace Movies.Application.Features.Genre.AutoMapper
{
    public class GenreEntityToDtoProfile : Profile
    {
        public GenreEntityToDtoProfile()
        {
            CreateMap<GenreEntity, GenreDto>();
        }
    }
}
