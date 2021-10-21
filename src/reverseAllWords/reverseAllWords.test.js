import { reverseAllWords } from "./reverseAllWords"

const testData = [
  {
    value: "Reverse all words and sentence", expected: "esreveR lla sdrow dna ecnetnes"
  },
  {
    value: "Lorem ipsum", expected: "meroL muspi"
  },
  {
    value: "We love JS", expected: "eW evol SJ"
  },
  {
    value: "Omnis molestias repellat eos.", expected: "sinmO saitselom talleper .soe"
  },
  { value: "Est illo reiciendis est repudiandae quia.", expected: "tsE olli sidneicier tse eadnaiduper .aiuq" },

  { value: "Enim ut vel amet maxime maxime quis quaerat voluptatem.", expected: "minE tu lev tema emixam emixam siuq tareauq .metatpulov" },
]


test.each(testData)('test is numberOf reverseAllWords', ({ value, expected }) => {
  console.log({
    value, recieived: reverseAllWords(value), expected
  })
  expect(reverseAllWords(value)).toBe(expected)
})

