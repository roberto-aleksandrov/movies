using FluentValidation;
using Movies.Application.Common.Extensions;
using Movies.Application.Common.Interfaces.Data;
using Movies.Application.Features.Movies.Commands.Validators;

namespace Movies.Application.Features.Movies.Commands.CreateMovie
{
    public class CreateMovieCommandValidator : AbstractValidator<CreateMovieCommand>
    {
        public CreateMovieCommandValidator(IData data)
        {
            CascadeMode = CascadeMode.StopOnFirstFailure;

            RuleFor(n => n)
                .SetValidator(new UpsertMovieCommandValidator(data));

            RuleFor(n => n.GenreIds)
                .NotEmpty()
                .HasUnique(n => n);

            RuleFor(n => n.Image)
                .ima
        }
    }
}
