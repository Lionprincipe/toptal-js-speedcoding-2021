import { firstUniqueChar } from "./firstUniqueChar"

const testData = [
  { value: "aabcbd", expected: "c" },
  { value: "hello", expected: "h" },
  { value: "traits", expected: "r" },
  { value: "holloh", expected: false },
  { value: "eveniet dolorem cupiditate necessitatibus qui fuga deserunt quia.", expected: "v" },
  { value: "dolor eum aut aut recusandae consequatur consequatur deleniti.", expected: "m" },
  { value: "id ut amet quo perferendis consequatur eius doloribus velit.", expected: "m" },
]

test.each(testData)('test is numberOf representation', ({ value, expected }) => {
  console.log({
    value, recieived: firstUniqueChar(value), expected
  })
  firstUniqueChar
  expect(firstUniqueChar(value)).toBe(expected)
})


/*
firstUniqueChar( "aabcbd" ) = undefinedexpected: "c"

firstUniqueChar( "hello" ) = undefinedexpected: "h"

firstUniqueChar( "traits" ) = undefinedexpected: "r"

firstUniqueChar( "holloh" ) = undefinedexpected: false

firstUniqueChar( "eveniet dolorem cupiditate necessitatibus qui fuga deserunt quia." ) = undefinedexpected: "v"

firstUniqueChar( "dolor eum aut aut recusandae consequatur consequatur deleniti." ) = undefinedexpected: "m"

firstUniqueChar( "id ut amet quo perferendis consequatur eius doloribus velit." ) = undefinedexpected: "m"
 */