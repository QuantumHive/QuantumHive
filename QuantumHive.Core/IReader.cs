using System.Linq;

namespace QuantumHive.Core
{
    public interface IReader<TEntity>
        where TEntity : class
    {
        IQueryable<TEntity> Entities { get; }
    }
}
