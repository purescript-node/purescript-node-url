module Test.Main where

import Prelude

import Effect (Effect)
import Node.URL (format, parse, parseQueryString, toQueryString)
import Test.Assert (assertEqual)

main ∷ Effect Unit
main = do
  assertEqual { expected: "http://example.com/", actual: format $ parse "http://example.com/" }
  assertEqual { expected: "foo=42", actual: toQueryString $ parseQueryString "foo=42" }
