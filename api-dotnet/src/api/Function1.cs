using Application.Features.ManageEmployee.Queries.GetEmployee;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace WebApi
{
    public class Employee : FunctionBase
    {
        public Employee(ISender mediator) : base(mediator)
        {
        }

        [FunctionName("GetEmployee")]
        public async Task<IActionResult> GetEmployee(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "GetEmployee/{id}")] HttpRequest req,
            ILogger log, int id)
        {
            //log.LogInformation("C# HTTP trigger function processed a request.");

            //string name = req.Query["name"];

            //string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            //dynamic data = JsonConvert.DeserializeObject(requestBody);
            //name = name ?? data?.name;

            //string responseMessage = string.IsNullOrEmpty(name)
            //    ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
            //    : $"Hello, {name}. This HTTP triggered function executed successfully.";

            string result = await Mediator.Send(new GetEmployeeQuery { EmployeeId = id });

            return new OkObjectResult(result);
        }


        [FunctionName("GetNews")]
        public IActionResult GetNews(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "GetNews")] HttpRequest req,
            ILogger log)
        {

            string result = "Get All News";

            return new OkObjectResult(result);
        }
    }
}
