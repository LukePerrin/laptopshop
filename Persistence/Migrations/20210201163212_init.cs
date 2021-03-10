using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProductConfigs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductConfigs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "ProductConfigs",
                columns: new[] { "Id", "Code", "Description", "Price", "Type" },
                values: new object[,]
                {
                    { 1, "8GB", "8GB", 45.67m, "RAM" },
                    { 2, "16GB", "16GB", 87.88m, "RAM" },
                    { 3, "500GB", "500GB", 123.34m, "HDD" },
                    { 4, "1TB", "1TB", 200.00m, "HDD" },
                    { 5, "red", "Red", 50.76m, "Colour" },
                    { 6, "blue", "Blue", 34.56m, "Colour" },
                    { 7, "i3", "Intel Core i3", 40.00m, "CPU" },
                    { 8, "i7", "Intel Core i7", 60.00m, "CPU" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Image", "Price", "Title" },
                values: new object[,]
                {
                    { 1, "dell.jpg", 349.87m, "Dell" },
                    { 2, "hp.jpg", 456.76m, "HP" },
                    { 3, "surface.png", 700m, "Surface Pro" },
                    { 4, "toshiba.jpg", 345.67m, "Toshiba" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductConfigs");

            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
