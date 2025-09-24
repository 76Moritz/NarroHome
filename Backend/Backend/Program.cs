using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using RestSharp;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Mailgun-Konfiguration aus Umgebungsvariablen
string? mailgunApiKey = Environment.GetEnvironmentVariable("MAILGUN_API_KEY");
string? mailgunDomain = Environment.GetEnvironmentVariable("MAILGUN_DOMAIN");

if (string.IsNullOrEmpty(mailgunApiKey) || string.IsNullOrEmpty(mailgunDomain))
{
    throw new Exception("MAILGUN_API_KEY und MAILGUN_DOMAIN müssen als Environment Variablen gesetzt sein!");
}

// POST /send-email
app.MapPost("/send-email", async (HttpRequest request) =>
{
    var body = await request.ReadFromJsonAsync<EmailRequest>();

    if (body is null)
        return Results.BadRequest("Ungültige Request-Daten");

    var client = new RestClient($"https://api.mailgun.net/v3/{mailgunDomain}");
    var req = new RestRequest("messages", Method.Post);
    req.AddHeader("Authorization", "Basic " + Convert.ToBase64String(
        System.Text.Encoding.ASCII.GetBytes($"api:{mailgunApiKey}")));

    req.AddParameter("from", $"NarroHome <mailgun@{mailgunDomain}>");
    req.AddParameter("to", body.To);
    req.AddParameter("subject", body.Subject);
    req.AddParameter("text", body.Text);

    var response = await client.ExecuteAsync(req);

    if (response.IsSuccessful)
        return Results.Ok(new { success = true, response.Content });
    else
        return Results.Problem(response.Content ?? "Mailgun request failed");
});

app.Run();

public record EmailRequest(string To, string Subject, string Text);