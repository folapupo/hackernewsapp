using HackerNews.Application.Interfaces;
using HackerNews.Domain.Entities;

namespace HackerNews.Infrastructure.Services;

public class HackerNewsService : IHackerNewsService
{
    private readonly HttpClient _httpClient;

    public HackerNewsService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.BaseAddress = new Uri("https://hacker-news.firebaseio.com/v0/");
    }

    public async Task<List<Story>> GetStoriesAsync(int page, int pageSize, string? searchTerm)
    {
        // 1. Fetch newest story IDs
        var allIds = await _httpClient.GetFromJsonAsync<List<int>>("newstories.json");

        if (allIds == null || allIds.Count == 0)
            return [];

        // 2. Paginate
        var pagedIds = allIds
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToList();

        // 3. Fetch story details in parallel
        var tasks = pagedIds.Select(id => _httpClient.GetFromJsonAsync<HackerNewsRawStory>($"item/{id}.json"));
        var rawStories = await Task.WhenAll(tasks);

        // 4. Map to your domain model
        var stories = rawStories
            .Where(s => s != null)
            .Select(s => new Story
            {
                Id = s!.Id,
                Title = s.Title ?? "No Title",
                Url = s.Url,
                Author = s.By ?? "Unknown",
                PostedAt = DateTimeOffset.FromUnixTimeSeconds(s.Time).UtcDateTime
            })
            .ToList();

        // 5. Optional: Apply search filter
        if (!string.IsNullOrWhiteSpace(searchTerm))
        {
            stories = stories
                .Where(s => s.Title.Contains(searchTerm, StringComparison.OrdinalIgnoreCase))
                .ToList();
        }

        return stories;
    }

    private class HackerNewsRawStory
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Url { get; set; }
        public string? By { get; set; }
        public long Time { get; set; }
    }
}
