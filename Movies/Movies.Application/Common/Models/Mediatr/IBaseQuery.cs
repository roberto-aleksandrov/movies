namespace Movies.Application.Common.Models.Mediatr
{
    public interface IBaseQuery
    {
        string Include { get; set; }

        int? Take { get; }

        int? Skip { get; }
    }
}
