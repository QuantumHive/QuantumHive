using System;

namespace QuantumHive.Core.Domain.Components
{
    public class EditInfo
    {
        public string CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }

        public string EditedBy { get; set; }
        public DateTime EditedOn { get; set; }
    }
}
