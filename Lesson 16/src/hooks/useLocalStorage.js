import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // getValue form localstorage if not have there then initialValue
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  // set value - useState + localStorage both will update
  function setStorageValue(newValue) {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [value, setStorageValue];
}

export default useLocalStorage;