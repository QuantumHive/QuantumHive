namespace QuantumHive.Core
{
    public interface ICommandHandler<TCommand>
        where TCommand : class
    {
        void Handle(TCommand command);
    }
}
