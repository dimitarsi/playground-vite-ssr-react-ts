import { App } from "../app/App";
import { renderToString } from "react-dom/server";

export const render = (url: string) => {
  return renderToString(<App>{url}</App>);
};
