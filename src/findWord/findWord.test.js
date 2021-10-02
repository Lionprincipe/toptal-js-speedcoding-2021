import { findWord } from "./findWord"

const testData = [{ value: ["morning", "Good morning coder!"], expected: [5, 11] },

{ value: ["wow", "wowowowow!"], expected: [0, 2] },

{ value: ["grow", "grogrogrow"], expected: [6, 9] },

{ value: ["Clean work", "clean work!"], expected: [0, 9] },

{ value: ["hello", "thanks very much"], expected: [] },

{ value: ["ut", "omnis exercitationem eum ut quaerat deserunt et"], expected: [25, 26] },

{ value: ["nihil", "sequi nihil nihil iste"], expected: [6, 10] },

{ value: ["harum", "harum"], expected: [0, 4] }
]

findWord

test.each(testData)('test is findWord', ({ value, expected }) => {
  console.log({
    value, recieived: findWord(...value), expected
  })
  expect(findWord(...value)).toEqual(expected)
})