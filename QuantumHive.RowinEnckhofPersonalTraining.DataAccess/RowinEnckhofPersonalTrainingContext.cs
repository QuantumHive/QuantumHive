using Microsoft.EntityFrameworkCore;
using QuantumHive.RowinEnckhofPersonalTraining.Domain;

namespace QuantumHive.RowinEnckhofPersonalTraining.DataAccess
{
    public class RowinEnckhofPersonalTrainingContext : DbContext
    {
        public RowinEnckhofPersonalTrainingContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<CourseTypeModel> CourseTypes { get; set; }
        public DbSet<CourseModel> Courses { get; set; }
        public DbSet<LocationModel> Locations { get; set; }
        public DbSet<ScheduleModel> Schedules { get; set; }
        public DbSet<ScheduleItemModel> ScheduleItems { get; set; }
        public DbSet<AgendaModel> Agenda { get; set; }
        public DbSet<SubscriptionModel> Subscriptions { get; set; }
        public DbSet<UserModel> Users { get; set; }
        public DbSet<PersonalTrainerModel> PersonalTrainers { get; set; }
        public DbSet<CustomerModel> Customers { get; set; }
    }
}