using Microsoft.AspNetCore.Mvc;

namespace myapi.Controllers;

[ApiController]
[Route("[controller]")]
public class CostPriceController : ControllerBase
{
    private readonly ILogger<CostPriceController> _logger;

    public CostPriceController(ILogger<CostPriceController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetCostPrice")]
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
