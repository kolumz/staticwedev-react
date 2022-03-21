using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application.Common.Interfaces;

public interface IFileUploadHelper
{
	string Objectname { get; set; }
	string ObjectID { get; set; }
	string Property { get; set; }
	Task<bool> Upload(IFormFile file);
	Task<bool> Upload(IFormFile file, string id, string objectName, string property);
	Task<bool> MultipleUpload(List<IFormFile> files);
	bool IsvalidExtension(string filename);

}

