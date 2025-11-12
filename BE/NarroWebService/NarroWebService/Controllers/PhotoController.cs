using Microsoft.AspNetCore.Mvc;
using NarroWebService.DataTransferObjects;
using NarroWebService.Models;
using NarroWebService.Repositories;

namespace RestApiBlueprint.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PhotoController : ControllerBase
    {
        private readonly IPhotoRepository _repository;

        public PhotoController(IPhotoRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Photo>>> GetAll()
        {
            var photos = await _repository.GetAllAsync();
            
            if(photos.Any()) 
                return Ok(photos);
            
            else 
                return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Photo>> GetById(int id)
        {
            var photo = await _repository.GetByIdAsync(id);
            if (photo == null) return NotFound();
            return Ok(photo);
        }

        [HttpPost]
        public async Task<ActionResult<Photo>> Create(PhotoDto dto)
        {
            var photo = new Photo
            {
                Id=dto.Id,
                Path = dto.Path,
                FallbackText = dto.FallbackText,
            };

            await _repository.AddAsync(photo);
            return CreatedAtAction(nameof(GetById), new { id = photo.Id }, photo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Photo dto)
        {
            var photo = await _repository.GetByIdAsync(id);
            if (photo == null) return NotFound();

            photo.Path = dto.Path;

            await _repository.UpdateAsync(photo);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.DeleteAsync(id);
            return NoContent();
        }
    }
}