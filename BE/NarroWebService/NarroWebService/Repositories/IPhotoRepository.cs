using NarroWebService.Models;

namespace NarroWebService.Repositories
{
    public interface IPhotoRepository
    {
        Task<IEnumerable<Photo>> GetAllAsync();
        Task<Photo?> GetByIdAsync(int id);
        Task<Photo> AddAsync(Photo photo);
        Task UpdateAsync(Photo photo);
        Task DeleteAsync(int id);
    }
}
