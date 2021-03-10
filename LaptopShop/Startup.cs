using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

namespace LaptopShop
{
    public class Startup
    {

       
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }


        // This method gets called by the runtime. Use this method to add servicclses to the container.
        public void ConfigureServices(IServiceCollection services)
        {           

            services.AddControllersWithViews().AddRazorRuntimeCompilation();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            if (env.IsStaging())
            {
                var test = "";
            }

            var envvar = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            var colour = Configuration.GetSection("Colour").Value;

            app.UseStaticFiles();

            app.UseRouting();           

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Angular}/{id?}");

                //this is an angular route and needs to be directed to the client app
                endpoints.MapControllerRoute("Details",
                  "Details",
                  new { controller = "Home", Action = "Angular" });

                endpoints.MapControllerRoute("Checkout",
                 "Checkout",
                 new { controller = "Home", Action = "Angular" });
            });
        }
    }
}
