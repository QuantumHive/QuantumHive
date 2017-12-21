using System.Linq;
using Microsoft.EntityFrameworkCore;
using QuantumHive.Core.Domain.Components;

namespace QuantumHive.Core.EntityFramework.Services
{
    public class Repository<TContext, TEntity> : IReader<TEntity>, IRepository<TEntity>
        where TContext : DbContext
        where TEntity : class, IModel
    {
        protected readonly TContext DbContext;

        public Repository(TContext dbContext)
        {
            DbContext = dbContext;
        }

        public IQueryable<TEntity> Entities => DbSet;

        public void Add(TEntity entity)
        {
            DbSet.Add(entity);
        }

        public void Remove(TEntity entity)
        {
            DbSet.Remove(entity);
        }

        private DbSet<TEntity> DbSet => DbContext.Set<TEntity>();
    }
}
