using FluentValidation.Internal;
using FluentValidation.Resources;
using FluentValidation.Validators;
using System.Threading;
using System.Threading.Tasks;

namespace Movies.Application.Common.Validators
{
    public class BaseValidator : PropertyValidator
    {
        public BaseValidator(IStringSource stringSource)
       : base(stringSource) { }

        public BaseValidator(string errorMessage)
            : base(errorMessage) { }

        protected override bool IsValid(PropertyValidatorContext context)
        {
            return Task.Run(() => IsValidAsync(context, new CancellationToken())).GetAwaiter().GetResult();
        }

        public override bool ShouldValidateAsync(FluentValidation.ValidationContext context)
        {
            return context.IsAsync();
        }
    }
}
