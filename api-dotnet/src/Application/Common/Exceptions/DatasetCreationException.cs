using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Common.Exceptions
{
    public class DatasetCreationException : Exception
    {
        public DatasetCreationException()
        : base("Cant't Create Dataset , there are invalid data.")
        {
        }
    }
}
