import { trim } from "./map";

export const parseCookies = (cookiesString = ""): Record<string, string> =>
  cookiesString
    .split(";")
    .map((part) => part.split("=").map(trim))
    .reduce((acc, [key, val]) => {
      return {
        ...acc,
        [key]: val,
      };
    }, {});
