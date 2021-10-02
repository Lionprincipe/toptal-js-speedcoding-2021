import { romanToInt } from './romanToInt'
/*
romanToInt( "XII" ) = undefinedexpected: 12

romanToInt( "LV" ) = undefinedexpected: 55

romanToInt( "IX" ) = undefinedexpected: 9

romanToInt( "XLIX" ) = undefinedexpected: 49

romanToInt( "C" ) = undefinedexpected: 100

romanToInt( "CXL" ) = undefinedexpected: 140

romanToInt( "CLXVII" ) = undefinedexpected: 167
*/

const testData = [
  ["CLXVII", 167],
  ["XII", 12],
  ["LV", 55],
  ["IX", 9],
  ["XLIX", 49],
  ["C", 100],
  ["CXL", 140],
]
test.each(testData)('myFunc work correctly for %s', (input, output) => {
  expect(romanToInt(input)).toBe(output)
})