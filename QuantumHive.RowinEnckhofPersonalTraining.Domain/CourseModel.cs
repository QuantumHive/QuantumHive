using System;
using QuantumHive.Core.Domain.Components;

namespace QuantumHive.RowinEnckhofPersonalTraining.Domain
{
    public class CourseModel : IModel
    {
        public int Id { get; set; }
        public DateTime EditInfo { get; set; }
        public bool Active { get; set; }

        public string Name { get; set; }
        public int Capacity { get; set; }

        public CourseTypeModel CourseType { get; set; }
    }
}
