const TOKEN_KEY = "token";

export const saveToken = (token: string) => {
  window.localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_KEY);
};

export const setItem = ({ key, value }: { key: string; value: string }) => {
  window.localStorage.setItem(key, value);
};

export const getItem = (key: string) => {
  return window.localStorage.getItem(key);
};

export const removeItem = (key: string) => {
  return window.localStorage.removeItem(key);
};
