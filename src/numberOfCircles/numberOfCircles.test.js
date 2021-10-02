import { numberOfCircles } from "./numberOfcircles"

const testData = [
  {
    value: 765, expected: 1
  },
  { value: 10698, expected: 5 },
  {
    value: -96681, expected: 5
  },
  {
    value: 31081, expected: 3
  },
  {
    value: 45065, expected: 2
  },
  {
    value: 19066, expected: 4
  },
  {
    value: 10653, expected: 2
  },
  {
    value: 765, expected: 1
  },
  {
    value: 10698, expected: 5
  },
  {
    value: -96681, expected: 5
  },
  {
    value: 92711, expected: 1
  },
  {
    value: 10663, expected: 3
  },
  { value: 76920, expected: 3 },
]


test.each(testData)('test is numberOf circles', ({ value, expected }) => {
  console.log({
    value, recieived: numberOfCircles(value), expected
  })

  expect(numberOfCircles(value)).toBe(expected)
})
