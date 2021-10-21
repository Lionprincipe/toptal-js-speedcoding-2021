import { missingInteger } from "./missingInteger"

const testData = [
  // { value: [3, 2, 1, 5], expected: 4 },

  // { value: [3, 2, 1], expected: 4 },

  // { value: [3, 2], expected: 4 },

  // { value: [99], expected: 100 },

  // { value: [], expected: 1 },

  { value: [2, 1, 0, 9, 6, 3, 5, 7, 8], expected: 4 },

  // { value: [4, 1, 3, 0, 2, 7, 9, 5, 6], expected: 8 },

  // { value: [5, 0, 6, 1, 9, 2, 8, 3, 7], expected: 4 },
]



test.each(testData)('test is missingInteger', ({ value, expected }) => {
  console.log({
    value, recieived: missingInteger(value), expected
  })
  expect(missingInteger(value)).toBe(expected)
})

