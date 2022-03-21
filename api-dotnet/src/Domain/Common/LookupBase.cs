using System.ComponentModel.DataAnnotations;
using Domain.Enums;

namespace Domain.Common
{
  public class LookupBase : ObjectBase<int>
  {
    [Required(ErrorMessageResourceName = "Required"), MaxLength((int)EnumHelper.EnumDataTypesLength.ISD_Name)]
    public string Name_A { get; set; } = String.Empty;
    [Required(ErrorMessageResourceName = "Required"), MaxLength((int)EnumHelper.EnumDataTypesLength.ISD_Name)]
    public string Name_E { get; set; } = String.Empty;
    [MaxLength((int)EnumHelper.EnumDataTypesLength.ISD_Description)]
    public string? Description_A { get; set; }
    [MaxLength((int)EnumHelper.EnumDataTypesLength.ISD_Description)]
    public string? Description_E { get; set; }
    public string? Color { get; set; }
    public bool IsDefault { get; set; }
    public bool IsLocked { get; set; }
  }
}
