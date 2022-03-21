using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Common.Models
{
	public class LookupItem
	{
		public string Name { get; set; } = string.Empty;
		public string DisplayName { get; set; } = string.Empty;
		public string LinkObjectName { get; set; } = string.Empty;
		public string ParentObjectName { get; set; } = string.Empty;
		public bool Locked { get; set; }
	}
	public class Module
	{
		public string Name { get; set; } = string.Empty;
		public string icon { get; set; } = string.Empty;
		public IList<LookupItem> items { get; set; } = new List<LookupItem>();
	}
	public class Lookups
    {
		public IList<Module> modules { get; set; } = new List<Module>();
	}
}
