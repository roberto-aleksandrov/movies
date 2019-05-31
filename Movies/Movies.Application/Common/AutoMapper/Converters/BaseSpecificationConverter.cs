using AutoMapper;
using Movies.Application.Common.Models.Mediatr;
using Movies.Application.Common.Spcifications;
using Movies.Domain.Entities;
using System;
using System.Linq;

namespace Movies.Application.Common.AutoMapper.Converters
{
    public class BaseSpecificationConverter<T> : ITypeConverter<IBaseQuery, BaseSpecification<T>>
        where T : BaseEntity
    {
        public BaseSpecification<T> Convert(IBaseQuery source, BaseSpecification<T> destination, ResolutionContext context)
        {
            return new BaseSpecification<T>
            {
                IncludeStrings = source.Include?.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries)?.ToList()
            };
        }
    }
}
