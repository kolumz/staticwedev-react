using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Services;

public class FileUploadHelper : IFileUploadHelper
{
	public string Objectname { get; set; } = string.Empty;
	public string ObjectID { get; set; } = string.Empty;
	public string Property { get; set; } = string.Empty;
	public async Task<bool> Upload(IFormFile file)
	{
		bool ret = true;
		string filepath = "";
		if (!string.IsNullOrEmpty(Objectname) && !string.IsNullOrEmpty(Property))
		{

			string FolderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Upload", Objectname, Property, ObjectID.ToString());
			if (!Directory.Exists(FolderPath))
				Directory.CreateDirectory(FolderPath);

			var fileName = Path.GetFileName(file.FileName);
			filepath = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Upload", Objectname, Property, ObjectID.ToString())).Root + $@"\{fileName}";

			if (!IsvalidExtension(filepath))
				throw new InvalidFileExtension();
			try
			{
				using (var stream = new FileStream(filepath, FileMode.Create))
				{
					await file.CopyToAsync(stream, new System.Threading.CancellationToken());
				}
			}
			catch (Exception e)
			{
				ret = false;
				string ex = e.Message;
			}
		}
		else
			ret = false;
		return ret;
	}
	public async Task<bool> Upload(IFormFile file, string id, string objectName, string property)
	{
		Objectname = objectName;
		ObjectID = id;
		Property = property;
		return await Upload(file);
	}

	public async Task<bool> MultipleUpload(List<IFormFile> files)
	{

		long size = files.Sum(f => f.Length);

		var filePaths = new List<string>();
		foreach (var formFile in files)
		{
			if (formFile.Length > 0)
			{
				//Getting FileName
				var fileName = Path.GetFileName(formFile.FileName);

				//Assigning Unique Filename (Guid)
				//var myUniqueFileName = Convert.ToString(Guid.NewGuid());

				// concatenating  FileName + FileExtension
				//var newFileName = String.Concat(myUniqueFileName, fileName);

				// Combines two strings into a path.
				var filepath = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Upload")).Root + $@"\{fileName}";
				if (!IsvalidExtension(filepath))
					throw new InvalidFileExtension();

				try
                {
					using (var stream = new FileStream(filepath, FileMode.Create))
					{
						await formFile.CopyToAsync(stream, new System.Threading.CancellationToken());
					}
				}
				catch (Exception)
        {
					return false;
                }
			}
		}
		return true;
	}

	public bool IsvalidExtension(string filename)
    {
		List<string> avilableExtensions = new List<string> { ".pdf", ".docx", ".xlsx" , ".xlsm" , ".xlsb", ".xltx" , ".png", ".jpg", ".jpeg", ".svg", ".gif" };
		string ext = Path.GetExtension(filename);
		if (avilableExtensions.Contains(ext.ToLower()))
			return true;
		else
			return false;
    }
}

