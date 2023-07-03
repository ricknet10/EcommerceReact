using Microsoft.EntityFrameworkCore;
using BackEnd.Entities;
using System;

namespace BackEnd.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
    }
}