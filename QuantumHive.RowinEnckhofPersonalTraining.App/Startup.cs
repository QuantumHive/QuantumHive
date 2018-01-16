using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace QuantumHive.RowinEnckhofPersonalTraining.App
{
    public class Startup
    {
        public Startup(IHostingEnvironment hostingEnvironment)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(hostingEnvironment.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddEnvironmentVariables();

            if (hostingEnvironment.IsProduction())
            {
                config.AddJsonFile($"appsettings.{hostingEnvironment.EnvironmentName.ToLowerInvariant()}.json", optional: false);
            }

            Configuration = config.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var environment = services.BuildServiceProvider().GetService<IHostingEnvironment>();
            services.AddMvc(options =>
            {
                if (environment.IsProduction())
                {
                    options.Filters.Add(typeof(RequireHttpsAttribute));
                }
            });

            services.IntegrateSimpleInjector();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment environment, ILoggerFactory loggerFactory)
        {
            app.InitializeContainer(Configuration);
            Bootstrapper.Verify();

            if (environment.IsDevelopment())
            {
                loggerFactory.AddConsole();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true
                });
            }

            if (environment.IsProduction())
            {
                var rewriteOptions = new RewriteOptions().AddRedirectToHttpsPermanent();
                app.UseRewriter(rewriteOptions);
            }

            app.UseStaticFiles();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }

        public IConfigurationRoot Configuration { get; }
    }
}
