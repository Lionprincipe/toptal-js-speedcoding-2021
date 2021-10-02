import { numberRepresentation } from "./numberOfRepresentation"

const testData = [
  { value: ["b", "a", "a", "a", "c", "b", "a"], expected: 421 },
  { value: ["v", "v", "v", "v", "v", "x"], expected: 51 },
  { value: ["a"], expected: 1 },
  { value: [], expected: 0 },
  { value: ["r", "e", "p", "r", "e", "h", "e", "n", "d", "e", "r", "i", "t"], expected: 14111131 },
  { value: ["u", "t"], expected: 11 },
  { value: ["n", "e", "s", "c", "i", "u", "n", "t"], expected: 1112111 },
]

test.each(testData)('test is numberOf representation', ({ value, expected }) => {
  console.log({
    value, recieived: numberRepresentation(value), expected
  })
  expect(numberRepresentation(value)).toBe(expected)
})