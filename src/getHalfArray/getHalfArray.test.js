import { getHalfArray } from "./getHalfArray"

const testData = [
  { value: [1, 2, 3, 4], expected: [1, 2] },

  { value: [1, 2, 3], expected: [1, 2] },

  { value: [1], expected: [1] },

  { value: [], expected: [] },
  { value: [true, ["ex", "velit", "similique"], 475], expected: [true, ["ex", "velit", "similique"]] },
  { value: ["Placeat quaerat perferendis architecto dolor."], expected: ["Placeat quaerat perferendis architecto dolor."] },

  {
    value: [["voluptatem", "corporis", "ut"], ["dolorum", "voluptatibus", "eos"], true], expected: [["voluptatem", "corporis", "ut"], ["dolorum", "voluptatibus", "eos"]]
  },]

test.each(testData)('test is numberOf getHalfArray', ({ value, expected }) => {
  console.log({
    value, recieived: getHalfArray(value), expected
  })
  expect(getHalfArray(value)).toEqual(expected)
})

