using Microsoft.AspNetCore.Mvc;
using QuantumHive.Core;
using QuantumHive.RowinEnckhofPersonalTraining.Contract.Commands;
using QuantumHive.RowinEnckhofPersonalTraining.Contract.Models;

namespace QuantumHive.RowinEnckhofPersonalTraining.App.Controllers
{
    [Route("api/locations")]
    public class LocationController : Controller
    {
        private readonly ICommandHandler<CreateModelCommand<Location>> _createLocation;
        public LocationController(ICommandHandler<CreateModelCommand<Location>> createLocation)
        {
            _createLocation = createLocation;
        }

        [HttpPost]
        public IActionResult Create([FromBody] Location model)
        {
            _createLocation.Handle(new CreateModelCommand<Location>(model));
            return NoContent();
        }
    }
}
