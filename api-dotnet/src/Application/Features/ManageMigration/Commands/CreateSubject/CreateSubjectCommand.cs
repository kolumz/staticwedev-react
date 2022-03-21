using MediatR;
using System.Net;
using System.Net.Http.Headers;

namespace Application.Features.ManageMigration.Commands.CreateSubject;
public class CreateSubjectCommand : IRequest<bool>
{
}

public class CreateSubjectCommandHandler : IRequestHandler<CreateSubjectCommand, bool>
{
    public CreateSubjectCommandHandler()
    {
        
    }
    public async Task<bool> Handle(CreateSubjectCommand request, CancellationToken cancellationToken)
    {
        using (var httpClient = new HttpClient())
        {
            httpClient.DefaultRequestHeaders.Add("x-api-key", "7e8a8e61-7972-40c1-b4f0-9a10bcbd38af");
            string[] directories = Directory.GetDirectories(@"D:\Upload");
            foreach (string dir in directories)
            {
                string[] photos = Directory.GetFiles(dir);
                //string[] photos = Directory.GetFiles(@"E:\\KMS\\src\\WebAPI\\wwwroot\\Upload\\100066");
                string subject = dir.Split("\\").ToList().Last();
                //string subject = "100066";
                foreach (string photo in photos)
                {   
                    using (var multipartFormContent = new MultipartFormDataContent())
                    {
                        //Load the file and set the file's Content-Type header
                        var fileStreamContent = new StreamContent(File.OpenRead(photo));


                        //Add the file
                        multipartFormContent.Add(fileStreamContent, name: "file", photo.Split("\\").ToList().Last());

                        //Send it
                        var response = await httpClient.PostAsync($"http://10.10.41.11:8000/api/v1/recognition/faces/?subject={subject}", multipartFormContent);
                        //response.EnsureSuccessStatusCode();
                    }

                }
            }
        }

        return true;
    }
}