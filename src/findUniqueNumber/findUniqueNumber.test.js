import { findUniqueNumber } from "./findUniqueNumber"

const testData = [
  {
    value: [0, 1, 5, 3, 0, 3, 5], expected: 1
  },
  {
    value: [1, 0, 1], expected: 0
  },
  {
    value: [24, 33, 56, 56, 32, 65, 77, 33, 24, 65, 32], expected: 77
  },
  {
    value: [5], expected: 5
  },
  {
    value: [24, 71, 78, 71, 18, 78, 40, 18, 24], expected: 40
  },
  {
    value: [87, 42, 10, 42, 39, 83, 87, 43, 4, 67, 67, 10, 83, 43, 39], expected: 4
  },
  { value: [88, 76, 88, 76, 50], expected: 50 },
]


test.each(testData)('test is findUniqueNumber', ({ value, expected }) => {
  console.log({
    value, recieived: findUniqueNumber(value), expected
  })
  expect(findUniqueNumber(value)).toBe(expected)
})
