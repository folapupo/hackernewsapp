using Microsoft.Extensions.DependencyInjection;
using HackerNews.Application.Interfaces;

namespace HackerNews.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        // Interface is implemented in Infrastructure, but registered here for separation of concerns
        return services;
    }
}
