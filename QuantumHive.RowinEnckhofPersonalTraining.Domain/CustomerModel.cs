using System.Collections.Generic;

namespace QuantumHive.RowinEnckhofPersonalTraining.Domain
{
    public class CustomerModel : UserModel
    {
        public string CustomerNumber { get; set; }

        public IEnumerable<AgendaModel> Agenda { get; set; }
    }
}
