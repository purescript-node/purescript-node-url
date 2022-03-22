import url from "url";
import queryString from "querystring";
export { parse, format } from "url";

export function resolve(from) {
  return to => url.resolve(from, to);
}

export const parseQueryString = queryString.parse;
export const toQueryString = queryString.stringify;
