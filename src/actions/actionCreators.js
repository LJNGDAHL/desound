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
    console.log('Action is working like it should!');
    dispatch({
      type: 'ON_ERROR',
      error,
      message
    });
  }, 1000);
};

// Keeps track of response status from Last.fm
export function fetchStatus(initialized, pending, completed) {
  return {
    type: 'FETCH_STATUS',
    initialized,
    pending,
    completed
  };
}

