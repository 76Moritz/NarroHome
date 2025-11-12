namespace NarroWebService.Models;

public class Photo
{
    public Guid Id { get;}
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

    public Photo()
    {
        Id = Guid.NewGuid();
    }
}