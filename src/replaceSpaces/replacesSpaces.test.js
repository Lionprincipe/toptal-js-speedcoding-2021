import { replaceSpaces } from "./replacesSpaces"

const testData = [{ value: "hello world", expected: "hello%20world" },

{ value: "this could be longest string, yet we never know.", expected: "this%20could%20be%20longest%20string,%20yet%20we%20never%20know." },

{ value: "may the 4th be with you", expected: "may%20the%204th%20be%20with%20you" },

{ value: " ", expected: "%20" },

{ value: "Animi incidunt odio autem.", expected: "Animi%20incidunt%20odio%20autem." },

{ value: "Veritatis ut voluptate eligendi nesciunt dolor sunt maiores consequatur.", expected: "Veritatis%20ut%20voluptate%20eligendi%20nesciunt%20dolor%20sunt%20maiores%20consequatur." },

{ value: "Iste in autem dolores ut.", expected: "Iste%20in%20autem%20dolores%20ut." }
]


test.each(testData)('test is numberOf representation', ({ value, expected }) => {
  console.log({
    value, recieived: replaceSpaces(value), expected
  })
  expect(replaceSpaces(value)).toBe(expected)
})