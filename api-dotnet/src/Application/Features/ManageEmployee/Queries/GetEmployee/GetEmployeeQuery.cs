using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Features.ManageEmployee.Queries.GetEmployee;
public class GetEmployeeQuery : IRequest<string>
{
    public int EmployeeId { get; set; }
}

public class GetEmployeeCommandHandler : IRequestHandler<GetEmployeeQuery, string>
{
    private readonly IApplicationDbContext _context;
    public GetEmployeeCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }
    public async Task<string> Handle(GetEmployeeQuery request, CancellationToken cancellationToken)
    {
#pragma warning disable CS8603 // Possible null reference return.
        return await _context.Employees.Where(x => x.Id == request.EmployeeId).Select(x => x.Name).FirstOrDefaultAsync();
    }
}
