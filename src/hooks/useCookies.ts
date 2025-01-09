'use client';
import { useEffect, useState } from 'react';
import cookie, { CookieAttributes } from 'js-cookie';

type CookieHookReturnType = {
  cookieValue: string | undefined;
  updateCookie: (name: string, value: string) => void;
  deleteCookie: (cookieName: string) => void;
};

const cookieConfig: CookieAttributes = {
  secure: false,
  expires: new Date(new Date().getTime() + 15 * 60 * 1000),
  path: '/',
  sameSite: 'strict',
};
Object.freeze(cookieConfig);

const useCookie = (cookieName?: string): CookieHookReturnType => {
  const [cookieValue, setCookieValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (cookieName) {
      const storedCookie = cookie.get(cookieName);
      setCookieValue(storedCookie);
    }
  }, [cookieName]);

  const updateCookie = (name: string, value: string) => {
    cookie.set(name, value, cookieConfig);
    setCookieValue(value);
  };

  const deleteCookie = (cookieName: string) => {
    cookie.remove(cookieName);
    setCookieValue(undefined);
  };

  return { cookieValue, updateCookie, deleteCookie };
};

export default useCookie;
