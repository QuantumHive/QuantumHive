using QuantumHive.Core;
using QuantumHive.RowinEnckhofPersonalTraining.Contract.Commands;
using QuantumHive.RowinEnckhofPersonalTraining.Contract.Models;
using QuantumHive.RowinEnckhofPersonalTraining.Domain;

namespace QuantumHive.RowinEnckhofPersonalTraining.BusinessLogic.CommandHandlers.Locations
{
    internal sealed class CreateLocationCommandHandler : ICommandHandler<CreateModelCommand<Location>>
    {
        private readonly IRepository<LocationModel> _locationRepository;

        public CreateLocationCommandHandler(IRepository<LocationModel> locationRepository)
        {
            this._locationRepository = locationRepository;
        }

        public void Handle(CreateModelCommand<Location> command)
        {
            var location = new LocationModel
            {
                Name = command.Model.Name,
                Address = command.Model.Address,
                City = command.Model.City,
            };

            _locationRepository.Add(location);
        }
    }
}
