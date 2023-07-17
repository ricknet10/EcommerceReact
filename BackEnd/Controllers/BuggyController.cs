using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{

    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound(){
            return NotFound();
        }
                [HttpGet("bad-request")]
        public ActionResult GetBadRequest(){
            return BadRequest(new ProblemDetail{Title="This is a bad request"});
        }
                [HttpGet("unauthorised")]
        public ActionResult GetUnalthorised(){
            return Unalthorised();
        }
                [HttpGet("validation-error")]
        public ActionResult GetValidationError(){
             ModelState.AddModelError("Problem1","This is the first error");
               ModelState.AddModelError("Problem","This is the second error");
               return ValidationProblem();

        }
                [HttpGet("server-error")]
        public ActionResult GetServerError(){
            return new Exception("This is a server error");
        }

        
    }
}