using Microsoft.EntityFrameworkCore;
using QuantumHive.Core.Extensions;

namespace QuantumHive.Core.EntityFramework.Decorators
{
    public class SaveChangesCommandHandlerDecorator<TCommand> : ICommandHandler<TCommand>
        where TCommand : class
    {
        private readonly ICommandHandler<TCommand> _decoratee;
        private readonly DbContext _dbContext;

        public SaveChangesCommandHandlerDecorator(
            ICommandHandler<TCommand> decoratee,
            DbContext dbContext)
        {
            _decoratee = decoratee;
            _dbContext = dbContext;
        }

        public void Handle(TCommand command)
        {
            command.ThrowIfNull(nameof(command));

            _decoratee.Handle(command);
            _dbContext.SaveChanges();
        }
    }
}
