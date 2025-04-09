using HackerNews.Application.Interfaces;
using HackerNews.Domain.Entities;
using MediatR;

namespace HackerNews.Application.Handlers.GetStories;

public class GetStoriesQueryHandler : IRequestHandler<GetStoriesQuery, List<Story>>
{
    private readonly IHackerNewsService _service;

    public GetStoriesQueryHandler(IHackerNewsService service)
    {
        _service = service;
    }

    public async Task<List<Story>> Handle(GetStoriesQuery request, CancellationToken cancellationToken)
    {
        return await _service.GetStoriesAsync(request.Page, request.PageSize, request.SearchTerm);
    }
}
