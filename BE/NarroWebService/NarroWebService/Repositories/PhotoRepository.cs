using Microsoft.EntityFrameworkCore;
using NarroWebService.Data;
using NarroWebService.Models;

namespace NarroWebService.Repositories
{
    public class PhotoRepository : IPhotoRepository
    {
        private readonly AppDbContext _context;

        public PhotoRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Photo>> GetAllAsync() =>
            await _context.Photo.ToListAsync();

        public async Task<Photo?> GetByIdAsync(int id) =>
            await _context.Photo.FindAsync(id);

        public async Task<Photo> AddAsync(Photo product)
        {
            _context.Photo.Add(product);
            await _context.SaveChangesAsync();
            return product;
        }

        public async Task UpdateAsync(Photo product)
        {
            _context.Photo.Update(product);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var product = await _context.Photo.FindAsync(id);
            if (product == null) return;
            _context.Photo.Remove(product);
            await _context.SaveChangesAsync();
        }
    }
}