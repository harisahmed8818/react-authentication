import { useState } from "react";

export const useLocalStorage1 = (key, initialValue) => {
  const storedValue = JSON.parse(localStorage.getItem(key));
  const [value, setValue] = useState(storedValue || initialValue);

  const setLocalStorageValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setLocalStorageValue];
};
