## Module Node.URL

This module defines bindings to the Node URL and Query String APIs.

#### `Query`

``` purescript
data Query
```

A query object is a JavaScript object whose values are strings or arrays of strings.

It is intended that the user coerce values of this type to/from some trusted representation via
e.g. `Data.Foreign` or `Unsafe.Coerce`..

#### `URL`

``` purescript
type URL = { protocol :: Nullable String, slashes :: Nullable Boolean, host :: Nullable String, auth :: Nullable String, hostname :: Nullable String, port :: Nullable String, pathname :: Nullable String, search :: Nullable String, path :: Nullable String, query :: Nullable String, hash :: Nullable String }
```

A URL object.

All fields are nullable, and will be missing if the URL string passed to 
`parse` did not contain the appropriate URL part.

#### `parse`

``` purescript
parse :: String -> URL
```

Parse a URL string into a URL object.

#### `format`

``` purescript
format :: URL -> String
```

Format a URL object as a URL string.

#### `resolve`

``` purescript
resolve :: String -> String -> String
```

Resolve a URL relative to some base URL.

#### `parseQueryString`

``` purescript
parseQueryString :: String -> Query
```

Convert a query string to an object.

#### `toQueryString`

``` purescript
toQueryString :: Query -> String
```

Convert a query string to an object.


