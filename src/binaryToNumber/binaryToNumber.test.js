import { binaryToNumber } from "./binaryToNumber"

const testData = [

  {
    value: 101, expected: 5
  },
  { value: 100101, expected: 37 },

  { value: 100010, expected: 34 },

  { value: 1010100, expected: 84 },

  { value: "11011", expected: 27 },

  { value: "1111011111", expected: 991 },

  { value: "1010011101", expected: 669 },
]





test.each(testData)('test is binaryToNumber', ({ value, expected }) => {
  console.log({
    value, recieived: binaryToNumber(value), expected
  })
  expect(binaryToNumber(value)).toEqual(expected)
})