// Toggles main menu
export function toggleMenu() {
  return {
    type: 'TOGGLE_MENU'
  };
}

// For testing purposes only
export const toggleAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'TOGGLE_MENU'
    });
  }, 1000);
};

/**
 * Sets a timeout in order to make the error process look 'smoother',
 * and then takes a string that is a message to the user.
 * @param  {string} message The message to be displayed to the user
 */
export const handleError = (error, message) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'ON_ERROR',
      error,
      message
    });
  }, 1000);
};

/**
 * Keeps track of response status from Last.fm when fetching data.
 * @param {bool} initialized  If fetch is initialized.
 * @param {bool} pending      If fetch is pending.
 * @param {bool} completed    If fetch is completed.
 */
export function fetchStatus(initialized, pending, completed) {
  return {
    type: 'FETCH_STATUS',
    initialized,
    pending,
    completed
  };
}

/**
 * Gathers information about the search to be performed at Last.fm.
 * @param {string} artist  The name of the artist
 * @param {number} limit   The number of artists to be displayed
 * @param {string} method  The kind of search to be performed (i.e. 'similar artists')
 */
export function askLastFm(artist, limit, method) {
  return {
    type: 'ASK_LASTFM',
    artist,
    limit,
    method
  };
}
