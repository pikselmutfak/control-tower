import { useEffect } from 'react';
import Cookies from 'js-cookie';

export function useCookieUpdater(cookieArray) {
  const initialState = {};

  if (cookieArray) {
    cookieArray.forEach(cookieItem => {
      initialState[cookieItem.key] = null;
    });
  }

  useEffect(() => {
    if (cookieArray && cookieArray.length > 0) {
      cookieArray.forEach(cookieItem => {
        const initialCookieValue = Cookies.get(cookieItem.key);
        if (!initialCookieValue) {
          Cookies.set(cookieItem.key, null);
        }
      });
    }
  }, [cookieArray]);

  // Tek tek setleme fonksiyonu
  const setCookieValues = (valuesArray) => {
    valuesArray.forEach(valueObj => {
      const key = Object.keys(valueObj)[0];
      const value = valueObj[key];
      Cookies.set(key, value);
    });
  };

  return setCookieValues;
}
