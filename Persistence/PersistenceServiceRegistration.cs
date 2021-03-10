using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace LaptopShop.Persistence
{
    public static class PersistenceServiceRegistration
    {
        public static IServiceCollection AddPersistenceServices(this IServiceCollection services, IConfiguration configuration)
        {
            var connstring = configuration.GetConnectionString("LaptopShopContext");

            services.AddDbContext<LaptopShopContext>(cfg =>
            {
                cfg.UseSqlServer(connstring);

            });
            services.AddScoped<IRepository, Repository>();

            return services;
        }
        
    }
}
