namespace QuantumHive.RowinEnckhofPersonalTraining.Domain
{
    public class SubscriptionModel
    {
        public int WeeklyCredits { get; set; }
        public CustomerModel Customer { get; set; }
        public CourseTypeModel CourseType { get; set; }
    }
}
