using Microsoft.AspNetCore.Mvc;
using BackEnd.Data;
using BackEnd.Entities;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Controllers
{

    public class ProductController : BaseApiController
    {
         private readonly StoreContext _context;
        public ProductController(StoreContext context)
        {
          _context = context;
        }
          [HttpGet]
        public async Task<ActionResult<List<Product>>>GetProducts(){
          // var product = await Products.ToListAsync();
           return   await _context.Products.ToListAsync();
            //return Ok(products);
        } 
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>>GetProduct(int id){
           // return context.Product.Find(id);
         return await _context.Products.FindAsync(id);


        }
    }
}