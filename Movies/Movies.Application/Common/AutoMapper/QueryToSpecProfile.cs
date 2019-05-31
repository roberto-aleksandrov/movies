using AutoMapper;
using Movies.Application.Common.AutoMapper.Converters;
using Movies.Application.Common.Models.Mediatr;
using Movies.Application.Common.Spcifications;

namespace Movies.Application.Common.AutoMapper
{
    public class QueryToSpecProfile : Profile
    {
        public QueryToSpecProfile()
        {
            CreateMap(typeof(IBaseQuery), typeof(BaseSpecification<>))
                .ConvertUsing(typeof(BaseSpecificationConverter<>));
        }
    }
}
