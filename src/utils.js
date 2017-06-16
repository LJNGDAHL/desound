/**
 * Creates a callback that extracts the target name and target value
 * from an event.
 * @param  {Function} fn The callback with event target name and target value.
 * @return {Function}    The callback that extracts name and value.
 */
export const extractEvent = (fn) => (e) => {
  fn(e.currentTarget.name, e.currentTarget.value);
};
