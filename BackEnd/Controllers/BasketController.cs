using Microsoft.AspNetCore.Mvc;
using BackEnd.Data;
using BackEnd.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _context;
        public BasketController(StroreContext context){
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult>>GetBasket(){
            var basket = await _context.Baskets
            .Include(i=>i.Items)
            .ThenInclude(p=>p.Product)
            .FirstOrDefaultAsync(x=> x.BuyerId==Request.Cookies("buyerId"));
            if (basket ==null)return NotFound();
            return basket;
        }
        [HttpPost]
        public async Task<ActionResult>AddItemtoBasket(int ProductId,int quantity){
           //get basket
           //create basket
           //get product
           //add item
           //save changes
           
            return StatusCode(201);
        }
        [HttDelete]
        public async Task<ActionResult>RemoveBasketItem(int productId,int quantity){
            //get basket
           //remove  item
           //save changes
            
            
            return Ok();
        }
    }

}