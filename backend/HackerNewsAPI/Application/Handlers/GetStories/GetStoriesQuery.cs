using HackerNews.Domain.Entities;
using MediatR;

namespace HackerNews.Application.Handlers.GetStories;

public record GetStoriesQuery(int Page, int PageSize, string? SearchTerm) : IRequest<List<Story>>;
