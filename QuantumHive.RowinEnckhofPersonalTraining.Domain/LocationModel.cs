using System;
using System.Collections.Generic;
using QuantumHive.Core.Domain.Components;

namespace QuantumHive.RowinEnckhofPersonalTraining.Domain
{
    public class LocationModel : IModel
    {
        public int Id { get; set; }
        public DateTime EditInfo { get; set; }
        public bool Active { get; set; }

        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }

        public IEnumerable<ScheduleModel> Schedules { get; set; }
    }
}
