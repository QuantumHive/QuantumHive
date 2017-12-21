using System;
using System.Collections.Generic;
using QuantumHive.Core.Domain.Components;

namespace QuantumHive.RowinEnckhofPersonalTraining.Domain
{
    public class CourseTypeModel : IModel
    {
        public int Id { get; set; }
        public DateTime EditInfo { get; set; }
        public bool Active { set; get; }

        public string Name { get; set; }

        public IEnumerable<CourseModel> Courses { get; set; }
    }
}
