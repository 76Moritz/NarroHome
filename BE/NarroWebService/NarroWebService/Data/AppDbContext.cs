using Microsoft.EntityFrameworkCore;
using NarroWebService.Models;

namespace NarroWebService.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Photo> Photo => Set<Photo>();
    }
}
