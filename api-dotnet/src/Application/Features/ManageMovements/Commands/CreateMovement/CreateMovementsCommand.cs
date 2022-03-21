using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Features.ManageMovements.Commands.CreateMovements;
public class CreateMovementsCommand : IRequest<int>
{
    public int EmployeeId { get; set; }
    //public DateTime RegisterDate { get; set; }
}

public class CreateMovementsCommandHandler : IRequestHandler<CreateMovementsCommand, int>
{
    private readonly IApplicationDbContext _context;
    public CreateMovementsCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }
    public async Task<int> Handle(CreateMovementsCommand request, CancellationToken cancellationToken)
    {
        var lastDate = _context.Movements.Where(x => x.EmployeeId == request.EmployeeId).OrderByDescending(x => x.RegisterDate).Select(x => x.RegisterDate).FirstOrDefault();
#pragma warning disable CS8073 // The result of the expression is always the same since a value of this type is never equal to 'null'
        if (lastDate != DateTime.MinValue && lastDate.AddMinutes(5) > DateTime.Now)
        {
            return 0;
        }
        
        var entity = new Movements();
        entity.EmployeeId = request.EmployeeId;
        entity.RegisterDate = DateTime.Now;


        _context.Movements.Add(entity);

        await _context.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }
}
