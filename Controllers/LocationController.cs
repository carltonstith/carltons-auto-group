using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using carltons_auto_group.Models;
using carltons_auto_group.DBcontext;
using Microsoft.EntityFrameworkCore;

namespace carltons_auto_group.Controllers
{
  [ApiController]
    [Route("api/[controller]")]
    public class LocationController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public LocationController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Location
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Location>>> GetLocations()
        {
            return await _context.Locations.ToListAsync();
        }

        // PUT: api/Location/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateLocation(int id, Location location)
        {
            location.LocationId = id;

            _context.Entry(location).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LocationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Location
        [HttpPost]
        public async Task<ActionResult<Location>> AddLocation(Location location)
        {
            _context.Locations.Add(location);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLocation", new { id = location.LocationId }, location);
        }

        // DELETE: api/Location/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Location>> DeleteLocation(int id)
        {
            var findLocation = await _context.Locations.FindAsync(id);
            if (findLocation == null)
            {
                return NotFound();
            }
            else
            {
                _context.Locations.Remove(findLocation);
                await _context.SaveChangesAsync();
                return findLocation;
            }
        }

        private bool LocationExists(int id)
        {
            return _context.Locations.Any(e => e.LocationId == id);
        }
    }
}