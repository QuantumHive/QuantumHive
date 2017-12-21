using System;
using QuantumHive.Core.Domain.Components;

namespace QuantumHive.RowinEnckhofPersonalTraining.Domain
{
    public class AgendaModel : IModel
    {
        public int Id { get; set; }
        public DateTime EditInfo { get; set; }
        public bool Active { get; set; }

        public ScheduleItemModel ScheduleItem { get; set; }
        public CustomerModel Customer { get; set; }
    }
}
