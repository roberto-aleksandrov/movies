using FluentValidation;
using MediatR;
using Movies.Application.Common.Constants.Validators;
using Movies.Application.Common.Interfaces.Data;
using Movies.Application.Common.Validators;
using Movies.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Movies.Application.Common.Extensions
{
    public static class FluentValidationExtensions
    {
        public static IRuleBuilderOptions<TRequest, TProperty> IsTrue<TEntity, TRequest, TProperty>(
            this IRuleBuilder<TRequest, TProperty> ruleBuilder,
            IAsyncRepository<TEntity> repository,
            Func<TProperty, IReadOnlyCollection<TEntity>, bool> criteria,
            Func<TProperty, ISpecification<TEntity>> spec = null,
            string errorMessage = ErrorMessages.Invalid)
                where TEntity : BaseEntity
        {
            return ruleBuilder.SetValidator(new DbValidator<TProperty, TEntity>(criteria, repository, spec, errorMessage));
        }

        public static IRuleBuilderOptions<TRequest, IEnumerable<TProperty>> HasUnique<TRequest, TProperty>(
            this IRuleBuilder<TRequest, IEnumerable<TProperty>> ruleBuilder,
            Expression<Func<TProperty, object>> expression)
              where TRequest : IBaseRequest

        {
            return ruleBuilder.SetValidator(new UniqueValidator<TProperty, object>(expression));
        }
    }
}
