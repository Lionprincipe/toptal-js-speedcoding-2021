import { removeAllSpaces } from "./removeAllSpaces"

const testData = [{
  value: "   Hello World! ", expected: "HelloWorld!"
},
{
  value: "Lorem Ipsum   !   ", expected: "LoremIpsum!"
},
{
  value: "     Remove spaces", expected: "Removespaces"
},
{
  value: "utdoloretetenim", expected: "utdoloretetenim"
},
{ value: "           inetlaboriosam       atque         quas", expected: "inetlaboriosamatquequas" },

{ value: "eiusvoluptatemenimdolormagni", expected: "eiusvoluptatemenimdolormagni" },]


test.each(testData)('test is numberOf removeAllSpaces', ({ value, expected }) => {
  console.log({
    value, recieived: removeAllSpaces(value), expected
  })
  expect(removeAllSpaces(value)).toBe(expected)
})
