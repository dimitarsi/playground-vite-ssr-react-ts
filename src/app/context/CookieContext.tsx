import { createContext, FC, useState } from "react";

export const CookieContext = createContext<{
  getValue: (name: string) => string;
  setValue: (name: string, val: string) => void;
} | null>(null);

const COOKIE_DURATION_DAYS = 30;

const Provider: FC<{ value: Record<string, string> }> = ({
  value,
  children,
}) => {
  const [store, setStore] = useState(value);
  return (
    <CookieContext.Provider
      value={{
        setValue: (name, val) => {
          const expDate = new Date();
          expDate.setDate(expDate.getDate() + COOKIE_DURATION_DAYS);
          document.cookie = `${name}=${val}; expires=${expDate.toUTCString()}`;
          setStore({
            ...store,
            [name]: val,
          });
        },
        getValue: (name) => {
          return store[name];
        },
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export default Provider;
