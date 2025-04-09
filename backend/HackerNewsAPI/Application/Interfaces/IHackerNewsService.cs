using HackerNews.Domain.Entities;

namespace HackerNews.Application.Interfaces;

public interface IHackerNewsService
{
    Task<List<Story>> GetStoriesAsync(int page, int pageSize, string? searchTerm);
}
