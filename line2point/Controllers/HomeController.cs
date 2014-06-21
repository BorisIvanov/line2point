using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace line2point.Controllers
{
  [HandleError]
  public class HomeController : Controller
  {

    public ActionResult Index()
    {
      return View();
    }
    
    private static readonly int RectMaxWidth = 400;
    private static readonly string[] ColorList = new string[]{"red", "green", "yellow", "blue"};

    [HttpPost]
    public JsonResult Update()
    {
      Random random = new Random();
      return new JsonResult { Data = new {
        x1 = random.Next(20, RectMaxWidth),
        y1 = random.Next(20, RectMaxWidth),
        x2 = random.Next(20, RectMaxWidth),
        y2 = random.Next(20, RectMaxWidth),
        color = ColorList[random.Next(0, ColorList.Length)]
      }};
    }

  }
}
