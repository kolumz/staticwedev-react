using Application.Common.Interfaces;
using Infrastructure.Persistence;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services
          .AddDbContext<ApplicationDbContext>(options =>
#pragma warning disable CS8604 // Possible null reference argument.
          options.UseSqlServer(Environment.GetEnvironmentVariable("ConnectionString")));

        services.AddScoped<IApplicationDbContext>(provider => provider.GetRequiredService<ApplicationDbContext>());

        services.AddTransient<IFileUploadHelper, FileUploadHelper>();

        return services;
    }
}
