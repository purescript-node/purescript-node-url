module Test.Main where

import Prelude

import Effect (Effect)
import Node.URL as URL
import Test.Assert (assertEqual)

main ∷ Effect Unit
main = do
  let urlStr = "http://example.com/"
  url <- URL.new urlStr
  urlStr' <- URL.format url
  assertEqual { expected: urlStr, actual: urlStr' }
