namespace HackerNews.Domain.Entities;

public class Story
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Url { get; set; }
    public string Author { get; set; } = string.Empty;
    public DateTime PostedAt { get; set; }
}
