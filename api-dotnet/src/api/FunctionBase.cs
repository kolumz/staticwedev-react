using MediatR;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApi;
public class FunctionBase
{
    private ISender _mediator = null!;

    protected ISender Mediator;
    public FunctionBase(ISender mediator)
    {
        Mediator = _mediator ??= mediator;
    }
}
