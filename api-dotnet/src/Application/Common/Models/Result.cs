using static Domain.Enums.EnumHelper;

namespace Application.Common.Models;

public class Result
{
    internal Result(bool succeeded, IEnumerable<string> errors,object data, StatusCodeEnum statusCode)
    {
        Succeeded = succeeded;
        Errors = errors.ToArray();
        Data = data;
        StatusCode = statusCode;
    }

    public bool Succeeded { get; set; }

    public StatusCodeEnum StatusCode { get; set; }

    public string[] Errors { get; set; }

    public object Data { get; set; }

    public static Result Success()
    {
        return new Result(true, Array.Empty<string>(), 0 , StatusCodeEnum.Success);
    }
    public static Result Success(object data)
    {
        return new Result(true, Array.Empty<string>(), data, StatusCodeEnum.Success);
    }
    public static Result Failure(IEnumerable<string> errors)
    {
        return new Result(false, errors, 0, StatusCodeEnum.InternalServerError);
    }
    public static Result Failure(IEnumerable<string> errors, StatusCodeEnum statusCode)
    {
        return new Result(false, errors, 0 , statusCode);
    }
}
