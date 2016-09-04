using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(login_popup.Startup))]
namespace login_popup
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
