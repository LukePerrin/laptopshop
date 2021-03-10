using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace LaptopShop
{
    public class Program
    {

        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            //RunSeeding(host);
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
