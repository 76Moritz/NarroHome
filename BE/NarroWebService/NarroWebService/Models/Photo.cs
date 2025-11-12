namespace NarroWebService.Models;

public class Photo
{
    public Guid Id { get; set; }
    public string Path
    {
        get;
        set;
    }

    public string FallbackText
    {
        get;
        set;
    }
}