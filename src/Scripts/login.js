/**
 * Simulates Single Page Application login response.
 * This would normally be inside a client controller.
 * @param {object} - The external login result containing success and name.
 */
function externalLoginComplete(result) {
    if (result.success) {
        // After successfull login, validation token will stop working (login with external provider will return server error).
        $("#socialLoginForm").html("");

        // Simulate templating engine update by re-writing a portion of the main page.
        $("#loginForm").html(
            "<h3>Congratulations, " + result.name + "!</h3>You logged in successfully. If we were using a templating engine we would update the auth state here to re-render the UI.");
    } else {
        // When login fails, validation token keeps working so login with external provider can be retried.
        $("#loginForm").html(
            "<h3>Login cancelled</h3>Normally you would ignore this since your app state was 'not authorized' and remained 'not authorized' but for this demo we want to indicate success and failure.");
    }
}