using System;
using System.Collections.Generic;
using QuantumHive.Core.Domain.Components;

namespace QuantumHive.RowinEnckhofPersonalTraining.Domain
{
    public class ScheduleModel : IModel
    {
        public int Id { get; set; }
        public DateTime EditInfo { get; set; }
        public bool Active { get; set; }

        public string Name { get; set; }

        public LocationModel Location { get; set; }
        public IEnumerable<ScheduleItemModel> ScheduleItems { get; set; }
    }
}
