namespace Application.Common.Models;
public class ObjectPermissionItem
{
  public string? ObjectName { get; set; }
  public List<string>? Functions { get; set; }
}

public class ObjectPermission
{
  public IList<ObjectPermissionItem>? Objects { get; set; }
}
