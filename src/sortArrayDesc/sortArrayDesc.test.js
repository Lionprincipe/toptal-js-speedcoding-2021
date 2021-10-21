import { sortArrayDesc } from "./sortArrayDesc"

const testData = [
  { value: ["a", "b", "c"], expected: ["c", "b", "a"] },

  { value: ["zzz", "zz", "z"], expected: ["zzz", "zz", "z"] },

  { value: ["aa", "ac", "ab"], expected: ["ac", "ab", "aa"] },

  { value: ["fuga", "doloribus", "perferendis", "dolores", "voluptatum", "cupiditate", "officiis", "voluptate", "et", "qui"], expected: ["voluptatum", "voluptate", "qui", "perferendis", "officiis", "fuga", "et", "doloribus", "dolores", "cupiditate"] },

  { value: ["ut", "qui", "quis", "iusto", "consequatur", "iusto", "sed", "ut", "est", "consequuntur"], expected: ["ut", "ut", "sed", "quis", "qui", "iusto", "iusto", "est", "consequuntur", "consequatur"] },

  { value: ["vero", "eos", "dolorem", "sint", "est", "quod", "velit", "dolores", "qui", "ipsa"], expected: ["vero", "velit", "sint", "quod", "qui", "ipsa", "est", "eos", "dolores", "dolorem"] }
]

test.each(testData)('test is sortArrayDesc', ({ value, expected }) => {
  console.log({
    value, recieived: sortArrayDesc(value), expected
  })
  expect(sortArrayDesc(value)).toEqual(expected)
})
