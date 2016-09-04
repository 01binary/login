/**
* Open a popup dialog with standard size.
* @param {string} name - Window name that can be used as a target for a POST form.
* @param {function} onClose - Handler that receives a copy of popup's 'result' window variable (must be serializable to JSON).
*/
function openPopup(name, onClose) {
    watchPopup(window.open(
        'about:blank',
        name,
        'width=455,height=485,location=0,centerscreen=1,resizable=0,scrollbars=0,status=0,toolbar=0,menubar=0,personalbar=0',
        true), onClose);
}

/**
 * Watches and closes a popup when it returns a result.
 * @param {object} popup - Popup window.
 * @param {function} onClose - Handler that receives a copy of popup's 'result' window variable.
 */
function watchPopup(popup, onClose) {
    if (popup) {
        if (watchPopup.watchTimer) {
            try {
                if (popup.closed) {
                    cancelPopup(popup, watchPopup.closeHandler)
                }

                if (popup.result) {
                    closePopup(popup, watchPopup.closeHandler);
                }
            }
            catch (e) {}
        } else {
            watchPopup.closeHandler = onClose;
            watchPopup.watchTimer = setInterval(
                watchPopup, 200, popup);
        }
    } else if (watchPopup.watchTimer) {
        clearInterval(watchPopup.watchTimer);
        watchPopup.watchTimer = null;
    }
}

/**
 * Handles popup closure where no result is available.
 * @param {object} popup - The popup that was closed.
 * @param {function} onClose - Close handler.
 */
function cancelPopup(popup, onClose) {
    watchPopup(null);
    onClose({ success: false });
}

/**
 * Handles popup dismissal to handle the result.
 * @param {object} popup - The popup that was dismissed.
 * @param {function} onClose - Close handler.
 */
function closePopup(popup, onClose) {
    watchPopup(null);
    onClose(popup.result);
    popup.close();
}