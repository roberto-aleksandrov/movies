using FluentValidation.Validators;
using Movies.Application.Common.Interfaces.Data;
using Movies.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Movies.Application.Common.Validators
{
    public class DbValidator<TProperty, TEntity> : BaseValidator
         where TEntity : BaseEntity
    {
        private readonly Func<TProperty, IReadOnlyCollection<TEntity>, bool> _criteria;
        private readonly Func<TProperty, ISpecification<TEntity>> _spec;
        private readonly IAsyncRepository<TEntity> _repository;

        public DbValidator(
             Func<TProperty, IReadOnlyCollection<TEntity>, bool> criteria,
            IAsyncRepository<TEntity> repository,
            Func<TProperty, ISpecification<TEntity>> spec,
            string errorMessage)
            : base(errorMessage)
        {
            _repository = repository;
            _spec = spec;
            _criteria = criteria;
        }

        protected override async Task<bool> IsValidAsync(PropertyValidatorContext context, CancellationToken cancellation)
        {
            var prop = (TProperty)context.PropertyValue;
            var entities = _spec == null
                ? await _repository.ListAllAsync()
                : await _repository.ListAsync(_spec(prop));

            return _criteria(prop, entities);
        }
    }
}
