using AutoMapper;
using Movies.Application.Common.Models.Mediatr;
using Movies.Application.Common.Spcifications;
using Movies.Domain.Entities;
using System;
using System.Collections.Generic;
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
                Skip = source.Skip ?? 0,
                Take = source.Take ?? 0,
                isPagingEnabled = source.Skip != null || source.Take != null,
                IncludeStrings = source
                    .Include?
                    .Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries)?
                    .ToList() ?? new List<string>()
            };
        }
    }
}
