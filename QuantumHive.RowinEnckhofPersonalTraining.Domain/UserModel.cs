using System;
using QuantumHive.Core.Domain.Components;
using QuantumHive.Core.Domain.Components.Enums;

namespace QuantumHive.RowinEnckhofPersonalTraining.Domain
{
    public class UserModel : IModel
    {
        public int Id { get; set; }
        public DateTime EditInfo { get; set; }
        public bool Active { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Birthdate { get; set; }
        public Sex Sex { get; set; }
        public bool Admin { get; set; }

        public string PhoneNumber { get; set; }
        public string PasswordHash { get; set; }
        public Guid SecurityStamp { get; set; }
        public string Email { get; set; }
        public string NormalizedEmail { get; set; }
        public bool EmailConfirmed { get; set; }
    }
}
