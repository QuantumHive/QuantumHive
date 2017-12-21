using System;
using System.Collections.Generic;
using QuantumHive.Core.Domain.Components;

namespace QuantumHive.RowinEnckhofPersonalTraining.Domain
{
    public class ScheduleItemModel : IModel
    {
        public int Id { get; set; }
        public DateTime EditInfo { get; set; }
        public bool Active { get; set; }

        public DateTime Date { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }

        public ScheduleModel Schedule { get; set; }
        public CourseModel Course { get; set; }
        public PersonalTrainerModel PersonalTrainer { get; set; }
        public IEnumerable<AgendaModel> Agenda { get; set; }
    }
}
