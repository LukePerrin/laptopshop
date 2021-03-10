using LaptopShop.Domain.ProductConfigs;
using LaptopShop.Domain.Products;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace LaptopShop.Persistence
{
    public class LaptopShopContext : DbContext
    {
        public LaptopShopContext()
        {
        }
        /// <summary>
        /// forward options to the base class which will figure out what to do with the options
        /// </summary>
        /// <param name="options"></param>
        public LaptopShopContext(DbContextOptions<LaptopShopContext> options) : base(options)
        {

        }

        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductConfig> ProductConfigs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            Console.WriteLine("OnModelCreating ------------------------------------------------------------------------------------------------");
            

            modelBuilder.Entity<Product>(u =>
            {
                u.HasKey(b => b.Id);
                u.Property(p => p.Price).HasColumnType("decimal(18,4)");                
            });

            modelBuilder.Entity<ProductConfig>(u =>
            {
                u.HasKey(b => b.Id);
                u.Property(p => p.Price).HasColumnType("decimal(18,4)");                
            });

            
            {
                var jsonString = File.ReadAllText("JsonData/productData.json");
                var items = JsonConvert.DeserializeObject<List<Product>>(jsonString);
                modelBuilder.Entity<Product>().HasData(items);

            }

            {
                var jsonString = File.ReadAllText("JsonData/laptopConfigData.json");
                var items = JsonConvert.DeserializeObject<List<ProductConfig>>(jsonString);
                modelBuilder.Entity<ProductConfig>().HasData(items);
            }
        }
        // ------------- this is not needed as we can create a migration using PM Console :) ---------------------
        //you supposedly needed this at design time if constructor is not triggered from startup.cs        
        //public class LaptopShopContextFactory : IDesignTimeDbContextFactory<LaptopShopContext>
        //{
        //    public LaptopShopContext CreateDbContext(string[] args)
        //    {
        //        string environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

        //        // Build config
        //        IConfiguration config = new ConfigurationBuilder()
        //            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../LaptopShop"))
        //            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        //            .AddJsonFile($"config.{environment}.json", optional: true)
        //            .AddEnvironmentVariables()
        //            .Build();

        //        Console.WriteLine(config.GetConnectionString("LaptopShopContext") + "---------------------------------------------------------------------");

        //        var optionsBuilder = new DbContextOptionsBuilder<LaptopShopContext>();
        //        optionsBuilder.UseSqlServer(config.GetConnectionString("LaptopShopContext"));

        //        return new LaptopShopContext(optionsBuilder.Options);
        //    }

        //}
    }

}



