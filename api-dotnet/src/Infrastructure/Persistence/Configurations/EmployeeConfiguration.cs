using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using static Domain.Enums.EnumHelper;

namespace Infrastructure.Persistence.Configurations;
public class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
{
  public void Configure(EntityTypeBuilder<Employee> builder)
  {
    builder.ToTable("ISFM_Employee");
  }
}
