using Microsoft.Owin.Security.Facebook;

namespace login_popup
{
    /// <summary>
    /// Adds display=popup to Facebook authentication page to use compact display more suitable for a small window.
    /// </summary>
    public class PopupFacebookProvider : FacebookAuthenticationProvider
    {
        public override void ApplyRedirect(FacebookApplyRedirectContext context)
        {
            context.Response.Redirect(context.RedirectUri + "&display=popup");
        }
    }
}