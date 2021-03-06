// <auto-generated />
using LaptopShop.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Persistence.Migrations
{
    [DbContext(typeof(LaptopShopContext))]
    [Migration("20210201163212_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.2");

            modelBuilder.Entity("LaptopShop.Domain.ProductConfigs.ProductConfig", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Code")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,4)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ProductConfigs");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Code = "8GB",
                            Description = "8GB",
                            Price = 45.67m,
                            Type = "RAM"
                        },
                        new
                        {
                            Id = 2,
                            Code = "16GB",
                            Description = "16GB",
                            Price = 87.88m,
                            Type = "RAM"
                        },
                        new
                        {
                            Id = 3,
                            Code = "500GB",
                            Description = "500GB",
                            Price = 123.34m,
                            Type = "HDD"
                        },
                        new
                        {
                            Id = 4,
                            Code = "1TB",
                            Description = "1TB",
                            Price = 200.00m,
                            Type = "HDD"
                        },
                        new
                        {
                            Id = 5,
                            Code = "red",
                            Description = "Red",
                            Price = 50.76m,
                            Type = "Colour"
                        },
                        new
                        {
                            Id = 6,
                            Code = "blue",
                            Description = "Blue",
                            Price = 34.56m,
                            Type = "Colour"
                        },
                        new
                        {
                            Id = 7,
                            Code = "i3",
                            Description = "Intel Core i3",
                            Price = 40.00m,
                            Type = "CPU"
                        },
                        new
                        {
                            Id = 8,
                            Code = "i7",
                            Description = "Intel Core i7",
                            Price = 60.00m,
                            Type = "CPU"
                        });
                });

            modelBuilder.Entity("LaptopShop.Domain.Products.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,4)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Image = "dell.jpg",
                            Price = 349.87m,
                            Title = "Dell"
                        },
                        new
                        {
                            Id = 2,
                            Image = "hp.jpg",
                            Price = 456.76m,
                            Title = "HP"
                        },
                        new
                        {
                            Id = 3,
                            Image = "surface.png",
                            Price = 700m,
                            Title = "Surface Pro"
                        },
                        new
                        {
                            Id = 4,
                            Image = "toshiba.jpg",
                            Price = 345.67m,
                            Title = "Toshiba"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
