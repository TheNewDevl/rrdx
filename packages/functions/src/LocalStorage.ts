/** Get an item from local storage, if available. */
export const getLsItem = (key: string) => {
  const localStorage = window.localStorage;
  return JSON.parse(localStorage.getItem(key));
};

/** Set an item in local storage. */
export const setLsItem = (key: string, value: any) => {
  const localStorage = window.localStorage;
  localStorage.setItem(key, JSON.stringify(value));
};

/** Remove an item from local storage. */
export const removeLsItem = (key: string) => {
  const localStorage = window.localStorage;
  localStorage.removeItem(key);
};
