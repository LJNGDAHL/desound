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
export const onErrorWithRedux = (message) => (dispatch) => {
  setTimeout(() => {
    console.log('Action is working like it should!');
    dispatch({
      type: 'ON_ERROR_WITH_REDUX',
      message
    });
  }, 1000);
};
