"use strict";

import url from "url";
import queryString from "querystring";
export const parse = url.parse;
export const format = url.format;

export function resolve(from) {
  return function (to) {
    return url.resolve(from, to);
  };
}

export const parseQueryString = queryString.parse;
export const toQueryString = queryString.stringify;
