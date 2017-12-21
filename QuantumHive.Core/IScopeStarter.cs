using System;

namespace QuantumHive.Core
{
    public interface IScopeStarter
    {
        IDisposable BeginScope();
    }
}
