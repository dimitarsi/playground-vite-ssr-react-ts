import { useContext } from "react";
import { CookieContext } from "../context/CookieContext";

export default function useCookie(cookieName: string) {
  const ctx = useContext(CookieContext);
  if (ctx === null) {
    throw "Cookie context is empty. Did you forget to wrap your application with <CookieContext />?";
  }

  return [
    ctx.getValue(cookieName),
    (val: string) => {
      ctx.setValue(cookieName, val);
    },
  ] as [string, (val: string) => void];
}
