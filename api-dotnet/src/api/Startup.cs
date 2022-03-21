using Application;
using Infrastructure;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;

[assembly: FunctionsStartup(typeof(WebApi.Startup))]

namespace WebApi;
public class Startup : FunctionsStartup
{
    public override void Configure(IFunctionsHostBuilder builder)
    {
        builder.Services.AddApplication();
        builder.Services.AddInfrastructure();
    }
}
