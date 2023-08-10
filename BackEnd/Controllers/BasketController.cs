using Microsoft.AspNetCore.Mvc;
using BackEnd.Data;
using BackEnd.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using BackEnd.DTOs;


namespace BackEnd.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _context;
        public BasketController(StoreContext context){
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<BasketDto>>GetBasket(){
            var basket = await RetrieveBasket();
           // .Include(i=>i.Items)
           // .ThenInclude(p=>p.Product)
            //.FirstOrDefaultAsync(x=> x.BuyerId==Request.Cookies("buyerId"));
            if (basket ==null)return NotFound();
            return new BasketDto{
                Id=basket.Id,
                BuyerId=basket.BuyerId,
                Items=basket.Items.Select(item=> new BasketItemDto{
                    ProductId = item.ProductId,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    PictureUrl = item.Product.PictureUrl,
                    Type = item.Product.Type,
                    Brand = item.Product.Brand,
                     Quantity = item.Quantity
                }).ToList()
            };
        }
        [HttpPost] // api/basket/productId=3&quantity=2?
        public async Task<ActionResult>AddItemtoBasket(int productId,int quantity){
           var basket = await RetrieveBasket();
           if(basket == null)basket = CreateBasket();
           var product = await _context.Products.FindAsync(productId);
           if(product==null)return NotFound();
           basket.AddItem(product,quantity);
           var result = await _context.SaveChangesAsync() > 0;
           if (result)return StatusCode(201);
           
           //get basket
           //create basket
           //get product
           //add item
           //save changes
            //return StatusCode(201);
            return BadRequest(new ProblemDetails{Title="Problem saving item to basket"});
        }

        private async Task<Basket> RetrieveBasket()
        {
            return await _context.Baskets
            .Include(i=>i.Items)
            .ThenInclude(p=>p.Product)
            .FirstOrDefaultAsync(x=>x.BuyerId==Request.Cookies["buyerId"]);
        }


        private Basket CreateBasket()
        {
            var buyerId = Guid.NewGuid().ToString();
            var CookieOptions = new CookieOptions{IsEssential = true,Expires=DateTime.Now.AddDays(30)};
            Response.Cookies.Append("buyerId",buyerId,CookieOptions);
            var basket = new Basket {BuyerId=buyerId};
            _context.Baskets.Add(basket);
            return basket;
        }


        [HttpDelete]
        public async Task<ActionResult>RemoveBasketItem(int productId,int quantity){
            var Basket = await RetrieveBasket();
            if (Basket == null)return NotFound();
            Basket.RemoveItem(productId,quantity);
            var result = await _context.SaveChangesAsync()>0;
            if (result)return Ok();
            
            //get basket
           //remove  item
           //save changes
            
            
            return BadRequest(new ProblemDetails{Title="Problem removing item from the basket"});
        }
    }

}