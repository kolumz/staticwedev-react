using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using static Domain.Enums.EnumHelper;

namespace Infrastructure.Persistence.Configurations;
public class MovementsConfiguration : IEntityTypeConfiguration<Movements>
{
  public void Configure(EntityTypeBuilder<Movements> builder)
  {
    builder.ToTable("ISFM_Movements");
  }
}
