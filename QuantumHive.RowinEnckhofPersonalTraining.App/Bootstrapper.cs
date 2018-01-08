using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.ViewComponents;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using QuantumHive.Core;
using SimpleInjector;
using SimpleInjector.Integration.AspNetCore.Mvc;
using SimpleInjector.Lifestyles;

namespace QuantumHive.RowinEnckhofPersonalTraining.App
{
    public static class Bootstrapper
    {
        private static readonly Container _container = new Container();

        public static void Verify()
        {
            _container.Verify();
        }

        public static void IntegrateSimpleInjector(this IServiceCollection services)
        {
            _container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddSingleton<IControllerActivator>(
                new SimpleInjectorControllerActivator(_container));
            services.AddSingleton<IViewComponentActivator>(
                new SimpleInjectorViewComponentActivator(_container));

            services.EnableSimpleInjectorCrossWiring(_container);
            services.UseSimpleInjectorAspNetRequestScoping(_container);
        }

        public static void InitializeContainer(this IApplicationBuilder app, IConfigurationRoot configuration)
        {
            _container.RegisterMvcControllers(app);
            _container.RegisterMvcViewComponents(app);
            _container.CrossWire<ILoggerFactory>(app);

            var assemblies = GetAssemblies.ToArray();

            RegisterServices();
            RegisterQueryHandlers(assemblies);
            RegisterCommandHandlers(assemblies);
            RegisterValidators();
        }

        private static void RegisterServices()
        {
            
        }

        private static void RegisterQueryHandlers(IEnumerable<Assembly> assemblies)
        {
            _container.Register(typeof(IQueryHandler<,>), assemblies);
        }

        private static void RegisterCommandHandlers(IEnumerable<Assembly> assemblies)
        {
            _container.Register(typeof(ICommandHandler<>), assemblies);
        }

        private static void RegisterValidators()
        {
            
        }

        private static void RegisterDataServices()
        {
            
        }

        private static IEnumerable<Assembly> GetAssemblies =>
            from file in new DirectoryInfo(AppDomain.CurrentDomain.BaseDirectory).GetFiles()
            where file.Extension.ToLower() == ".dll"
            where file.Name.ToLower().StartsWith("quantumhive")
            select Assembly.Load(AssemblyName.GetAssemblyName(file.FullName));
    }
}
