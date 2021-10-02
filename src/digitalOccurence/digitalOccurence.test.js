import { digitOccurrence } from "./digitalOccurrence"

const testData = [
  { value: [11, 1], expected: 4 },


]


test.each(testData)('test is numberOf occurences', ({ value, expected }) => {
  console.log({
    value, recieived: digitOccurrence(...value), expected
  })
  expect(digitOccurrence(...value)).toBe(expected)
})
