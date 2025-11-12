using Microsoft.EntityFrameworkCore;
using NarroWebService.Data;
using NarroWebService.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Database
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Repository
builder.Services.AddScoped<IPhotoRepository, PhotoRepository>();

var app = builder.Build();

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();

}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();