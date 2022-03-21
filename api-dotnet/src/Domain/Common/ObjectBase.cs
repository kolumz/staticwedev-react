using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Common
{
  public abstract class ObjectBase<T> : AuditableEntity
  {
    [Column(Order = 0)]
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public T Id { get; set; }
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public int SortIndex { get; set; }
    public bool Focus { get; set; }
    public bool Active { get; set; }
  }
}
