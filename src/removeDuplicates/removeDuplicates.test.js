import { removeDuplicates } from "./removeDuplicates"

const testData = [{
  value: "aabcbd", expected: "abcd"
},
{
  value: "hello", expected: "helo"
},
{
  value: "traits", expected: "trais"
},
{
  value: "holloh", expected: "hol"
},
{
  value: "hello world", expected: "helo wrd"
},
{
  value: "consectetur assumenda vitae laborum natus suscipit voluptate.", expected: "consetur amdvilbp."
},
{
  value: "eum nemo nihil non nostrum.", expected: "eum noihlstr."
},
{ value: "quos quis qui in odit labore amet.", expected: "quos indtlabrem." }]

test.each(testData)('test is removeDuplicates', ({ value, expected }) => {
  console.log({
    value, recieived: removeDuplicates(value), expected
  })
  expect(removeDuplicates(value)).toBe(expected)
})
