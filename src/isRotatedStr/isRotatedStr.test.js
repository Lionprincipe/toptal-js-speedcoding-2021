import { isRotatedStr } from "./isRotatedStr"
const testData = [
  { value: ["abcde", "cdeab"], expected: true },
  { value: ["abcde", "abced"], expected: false },
  { value: ["", "a"], expected: false },
  { value: ["", ""], expected: true },
  { value: ["iexcepturi", "irutpecxe"], expected: false },
  { value: ["nin", "ni"], expected: false },
  { value: ["did", "di"], expected: false },
]



/*
isRotatedStr( "abcde","cdeab" ) = undefinedexpected: true

isRotatedStr( "abcde","abced" ) = undefinedexpected: false

isRotatedStr( "","a" ) = undefinedexpected: false

isRotatedStr( "","" ) = undefinedexpected: true

isRotatedStr( "iexcepturi","irutpecxe" ) = undefinedexpected: false

isRotatedStr( "nin","ni" ) = undefinedexpected: false

isRotatedStr( "did","di" ) = undefinedexpected: false
 */




test.each(testData)('test isRotatedStr', ({ value, expected }) => {
  console.log({
    value, recieived: isRotatedStr(...value), expected
  })
  isRotatedStr
  expect(isRotatedStr(...value)).toBe(expected)
})

