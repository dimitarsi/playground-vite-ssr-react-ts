import { App } from "../app/App";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

export const render = (url: string) => {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
};
