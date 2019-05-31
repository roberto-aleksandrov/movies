using Microsoft.AspNetCore.Mvc;
using Movies.WebUI.Models.BindingModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Movies.WebUI.Controllers
{
    public class UsersController : BaseController
    {
        [HttpPost]
        public async Task<ActionResult<List<int>>> Register(RegisterUserBindingModel createUserBm)
        {
            return Ok(new List<int> { 1 });
        }

    }
}
