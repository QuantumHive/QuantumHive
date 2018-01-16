namespace QuantumHive.RowinEnckhofPersonalTraining.Contract.Commands
{
    public class CreateModelCommand<TModel>
        where TModel : class
    {
        public TModel Model { get; }

        public CreateModelCommand(TModel model)
        {
            Model = model;
        }
    }
}
