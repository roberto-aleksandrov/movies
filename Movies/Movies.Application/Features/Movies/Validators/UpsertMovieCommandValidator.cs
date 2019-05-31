using FluentValidation;
using Movies.Application.Common.Interfaces.Data;
using Movies.Application.Features.Movies.Models;

namespace Movies.Application.Features.Movies.Commands.Validators
{
    public class UpsertMovieCommandValidator : AbstractValidator<UpsertMovieCommand>
    {
        public UpsertMovieCommandValidator(IData data)
        {
            CascadeMode = CascadeMode.StopOnFirstFailure;

            RuleFor(n => n.Title)
                .NotEmpty();

            RuleFor(n => n.ReleaseDate)
                .NotEmpty();
        }
    }
}
