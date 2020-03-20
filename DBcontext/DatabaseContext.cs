using System;
using carltons_auto_group.Models;
using Microsoft.EntityFrameworkCore;

namespace carltons_auto_group.DBcontext
{
  public class DatabaseContext : DbContext
  {
    public DatabaseContext (DbContextOptions<DatabaseContext> options) : base(options)
    {}

    public DbSet<Employee> Employees { get; set; }
    public DbSet<Location> Locations { get; set; }
  }
}