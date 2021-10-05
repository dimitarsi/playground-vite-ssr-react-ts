import { FC } from "react";
import CookieContext from "../app/context/CookieContext";
import { parseCookies } from "../app/utils/cookies";

export const Providers: FC = ({ children }) => {
  const cookies = parseCookies(document.cookie);

  return <CookieContext value={cookies}>{children}</CookieContext>;
};
