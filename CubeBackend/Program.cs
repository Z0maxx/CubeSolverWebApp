var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services
    .AddCors()
    .AddControllersWithViews();

var app = builder.Build();
app.UseCors(options => {
    options
        .WithOrigins(new string[] { "http://localhost:5173", "https://cubesolver.me" })
        .AllowAnyHeader()
        .AllowAnyMethod();
  });

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles(new StaticFileOptions
{
    ServeUnknownFileTypes = true
});

app.UseRouting();

app.UseAuthorization();
app.MapControllers();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
