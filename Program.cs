var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "blog",
        pattern: "Blog",
        defaults: new { controller = "Home", action = "Blog" });

    endpoints.MapControllerRoute(
        name: "hobbies",
        pattern: "Hobbies",
        defaults: new { controller = "Home", action = "Hobbies" });

    endpoints.MapControllerRoute(
        name: "kitchen",
        pattern: "Kitchen",
        defaults: new { controller = "Home", action = "Kitchen" });

    endpoints.MapControllerRoute(
        name: "story",
        pattern: "Story",
        defaults: new { controller = "Home", action = "Story" });

    endpoints.MapControllerRoute(
        name: "projects",
        pattern: "Projects",
        defaults: new { controller = "Home", action = "Projects" });
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
