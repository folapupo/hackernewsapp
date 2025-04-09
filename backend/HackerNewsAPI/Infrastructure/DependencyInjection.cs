using Microsoft.Extensions.DependencyInjection;
using HackerNews.Application.Interfaces;
using HackerNews.Infrastructure.Services;

namespace HackerNews.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddHttpClient<IHackerNewsService, HackerNewsService>();
        return services;
    }
}
