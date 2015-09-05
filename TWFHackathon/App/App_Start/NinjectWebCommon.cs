[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(App.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(App.App_Start.NinjectWebCommon), "Stop")]

namespace App.App_Start
{
    using System;
    using System.Web;

    using Microsoft.Web.Infrastructure.DynamicModuleHelper;

    using Ninject;
    using Ninject.Web.Common;
    using Ninject.Extensions.Conventions;
    using System.Collections.Generic;
    using Domino;

    public static class NinjectWebCommon 
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start() 
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }
        
        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }
        
        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

                RegisterServices(kernel);
                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            kernel.Bind<List<Category>>().ToConstant(new List<Category>
            {
                new Category("Animal", new List<string>() { "cat1.png", "cat2.png", "dog1.png", "dog2.png" }),
                new Category("Building", new List<string>() { "ancient.png", "castle.png", "house.png", "mosque.png" }),
                new Category("Digit", new List<string>() { "1.png", "2.png", "3.png", "4.png" }),
                new Category("Flower", new List<string>() { "flower1.png", "flower2.png", "flower3.png", "flower4.png" }),
                new Category("Land_Vehicle", new List<string>() { "bicycle.png", "car1.png", "car2.png", "motorcycle.png" }),
                new Category("Letter", new List<string>() { "A.png", "B.png", "C.png", "D.png" }),
                new Category("Person", new List<string>() { "body.png", "female.png", "femaleHead.png", "maleHead.png" }),
                new Category("Phone", new List<string>() { "analog.png", "bootstrap.png", "earphone.png", "mobile.png" }),
                new Category("Plane", new List<string>() { "plane1.png", "plane2.png", "plane3.png", "plane4.png" }),
                new Category("Shoe", new List<string>() { "shoe1.png", "shoe2.png", "shoe3.png", "shoe4.png" })
            }).WhenInjectedExactlyInto<CategoriesProvider>();

            kernel.Bind(scan =>
            {
                scan
                .FromThisAssembly()
                .SelectAllClasses()
                .Excluding<GameBuilder>()
                .BindAllInterfaces();
            });
        }
    }
}
