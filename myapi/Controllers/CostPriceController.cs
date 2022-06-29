using Microsoft.AspNetCore.Mvc;

namespace myapi.Controllers;

[ApiController]
[Route("[controller]")]
public class CostPriceController : ControllerBase
{

    [HttpGet]
    public CostPrice Get()
    {
        return new CostPrice
        {
            itemCost = 20,
            overheadPercentage = 0.18,
            taxPercentage = 0.06,
            profitPercentage = 0.2
        };
    }
}
