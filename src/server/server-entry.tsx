import { App } from "../app/App";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { parseCookies } from "../app/utils/cookies";
import CookieContextProvider from "../app/context/CookieContext";

export const render = (
  url: string,
  cookies: string,
  context: Record<string, unknown>
) => {
  return renderToString(
    <CookieContextProvider value={parseCookies(cookies)}>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </CookieContextProvider>
  );
};
