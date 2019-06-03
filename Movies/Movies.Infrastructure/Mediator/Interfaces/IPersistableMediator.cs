using MediatR;
using Movies.Application.Common.Models.Mediatr;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Movies.Infrastructure.Mediator.Interfaces
{
    public interface IPersistableMediator
    {
        Task<TResponse> Send<TResponse>(IRequest<TResponse> request);

        Task<List<int>> Send<TResponse>(BaseCommand<TResponse> request);
    }
}
