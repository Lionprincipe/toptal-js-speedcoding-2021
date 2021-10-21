import { isAnagram } from "./isAnagram"

const testData = [
  { value: ["rat", "car"], expected: false },

  { value: ["restful", "fluster"], expected: true },

  { value: ["evil", "vile"], expected: true },

  { value: ["torrent", "rotten"], expected: false },

  { value: ["qui", "sit"], expected: false },

  { value: ["exercitationem", "qui"], expected: false },

  { value: ["corporis", "ut"], expected: false },]


test.each(testData)('test is  isAnagram', ({ value, expected }) => {
  console.log({
    value, recieived: isAnagram(...value), expected
  })
  expect(isAnagram(...value)).toBe(expected)
})

