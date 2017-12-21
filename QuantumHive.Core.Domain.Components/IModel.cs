using System;

namespace QuantumHive.Core.Domain.Components
{
    public interface IModel
    {
        int Id { get; set; }
        DateTime EditInfo { get; set; }
        bool Active { get; set; }
    }
}
