import { averageAsciiChar } from "./averageAsciiChar"
const testData = [
  { value: "Hello World!", expected: "Z" },
  { value: "JavaScript", expected: "f" },
  { value: "Run, Forest, run", expected: "Y" },
  { value: "1984 by George Orwell", expected: "T" },
  { value: "Nemo exercitationem nulla ipsa et qui dolore inventore.", expected: "a" },
  { value: "Culpa nemo natus laudantium est.", expected: "`" },
  { value: "Qui nulla consequuntur cum quod.", expected: "b" },
]




test.each(testData)('test averageAsciiChar', ({ value, expected }) => {
  console.log({
    value, recieived: averageAsciiChar(value), expected
  })
  averageAsciiChar
  expect(averageAsciiChar(value)).toBe(expected)
})

// averageAsciiChar("Hello World!") = undefinedexpected: "Z"

// averageAsciiChar("JavaScript") = undefinedexpected: "f"

// averageAsciiChar("Run, Forest, run") = undefinedexpected: "Y"

// averageAsciiChar("1984 by George Orwell") = undefinedexpected: "T"

// averageAsciiChar("Nemo exercitationem nulla ipsa et qui dolore inventore.") = undefinedexpected: "a"

// averageAsciiChar("Culpa nemo natus laudantium est.") = undefinedexpected: "`"

// averageAsciiChar("Qui nulla consequuntur cum quod.") = undefinedexpected: "b"

