using System.Collections.Generic;

namespace QuantumHive.RowinEnckhofPersonalTraining.Domain
{
    public class PersonalTrainerModel : UserModel
    {
        public IEnumerable<ScheduleItemModel> ScheduleItems { get; set; }
    }
}
