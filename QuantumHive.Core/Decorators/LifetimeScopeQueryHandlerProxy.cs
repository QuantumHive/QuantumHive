using System;
using System.Diagnostics;
using QuantumHive.Core.Extensions;

namespace QuantumHive.Core.Decorators
{
    public class LifetimeScopeQueryHandlerProxy<TQuery, TResult> : IQueryHandler<TQuery, TResult>
        where TQuery : class, IQuery<TResult>
    {
        private readonly IScopeStarter _scopeStarter;
        private readonly Func<IQueryHandler<TQuery, TResult>> _decorateeFactory;

        public LifetimeScopeQueryHandlerProxy(
            IScopeStarter scopeStarter,
            Func<IQueryHandler<TQuery, TResult>> decorateeFactory)
        {
            _scopeStarter = scopeStarter;
            _decorateeFactory = decorateeFactory;
        }

        [DebuggerStepThrough]
        public TResult Handle(TQuery query)
        {
            query.ThrowIfNull(nameof(query));

            using (_scopeStarter.BeginScope())
            {
                IQueryHandler<TQuery, TResult> handler = _decorateeFactory.Invoke();
                return handler.Handle(query);
            }
        }
    }
}
