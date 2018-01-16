using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.ViewComponents;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using QuantumHive.Core;
using QuantumHive.Core.EntityFramework.Services;
using QuantumHive.RowinEnckhofPersonalTraining.DataAccess;
using SimpleInjector;
using SimpleInjector.Integration.AspNetCore.Mvc;
using SimpleInjector.Lifestyles;

namespace QuantumHive.RowinEnckhofPersonalTraining.App
{
    public static class Bootstrapper
    {
        private static readonly Container Container = new Container();

        public static void Verify()
        {
            Container.Verify();
        }

        public static void IntegrateSimpleInjector(this IServiceCollection services)
        {
            Container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddSingleton<IControllerActivator>(
                new SimpleInjectorControllerActivator(Container));
            services.AddSingleton<IViewComponentActivator>(
                new SimpleInjectorViewComponentActivator(Container));

            services.EnableSimpleInjectorCrossWiring(Container);
            services.UseSimpleInjectorAspNetRequestScoping(Container);
        }

        public static void InitializeContainer(this IApplicationBuilder app, IConfigurationRoot configuration)
        {
            Container.RegisterMvcControllers(app);
            Container.RegisterMvcViewComponents(app);
            Container.CrossWire<ILoggerFactory>(app);

            var assemblies = GetAssemblies.ToArray();

            RegisterServices();
            RegisterQueryHandlers(assemblies);
            RegisterCommandHandlers(assemblies);
            RegisterValidators();
            RegisterDataServices(configuration);
        }

        private static void RegisterServices()
        {
            
        }

        private static void RegisterQueryHandlers(IEnumerable<Assembly> assemblies)
        {
            Container.Register(typeof(IQueryHandler<,>), assemblies);
        }

        private static void RegisterCommandHandlers(IEnumerable<Assembly> assemblies)
        {
            Container.Register(typeof(ICommandHandler<>), assemblies);
        }

        private static void RegisterValidators()
        {
            
        }

        private static void RegisterDataServices(IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("rownipt");
            RowinEnckhofPersonalTrainingContext DbContextCreator() => new RowinEnckhofPersonalTrainingContext(null); //TODO connection string + usercontext
            var dbContextRegistration = Lifestyle.Scoped.CreateRegistration(DbContextCreator, Container);
            Container.AddRegistration<RowinEnckhofPersonalTrainingContext>(dbContextRegistration);
            Container.AddRegistration<DbContext>(dbContextRegistration);

            Type RepositoryTypeFactory(TypeFactoryContext typeContext)
            {
                var entityType = typeContext.ServiceType.GetGenericArguments()[0];
                return typeof(Repository<,>).MakeGenericType(typeof(RowinEnckhofPersonalTrainingContext), entityType);
            }

            Container.RegisterConditional(typeof(IReader<>), RepositoryTypeFactory, Lifestyle.Transient, predicate => true);
            Container.RegisterConditional(typeof(IRepository<>), RepositoryTypeFactory, Lifestyle.Transient, predicate => true);
        }

        private static IEnumerable<Assembly> GetAssemblies =>
            from file in new DirectoryInfo(AppDomain.CurrentDomain.BaseDirectory).GetFiles()
            where file.Extension.ToLower() == ".dll"
            where file.Name.ToLower().StartsWith("quantumhive")
            select Assembly.Load(AssemblyName.GetAssemblyName(file.FullName));
    }
}
