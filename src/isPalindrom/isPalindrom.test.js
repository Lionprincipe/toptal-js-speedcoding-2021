import { isPalindrome } from "./isPalindrom"


const testData = [
  { value: "", expected: true },
  { value: "a_b abab", expected: false },
  { value: "Do geese see God?", expected: true },
  { value: "Go hang a salami, I'm a lasagna hog", expected: true },
  { value: "a_ba", expected: true },
  { value: "Est ut harum consequatur non tenetur animi..imina rutenet non rutauqesnoc murah tu tsE", expected: true },
  { value: "Natus voluptas magni consequuntur dolor..rolod rutnuuqesnoc ingam satpulov sutaN", expected: true },
  { value: "Quibusdam quia rem odio.", expected: false }
]
test.each(testData)('test is palindrome', ({ value, expected }) => {
  console.log({
    value, recieived: isPalindrome(value), expected
  })
  expect(isPalindrome(value)).toBe(expected)
})


// isPalindrome("") = undefinedexpected: true

// isPalindrome("a_b abab") = undefinedexpected: false

// isPalindrome("Do geese see God?") = undefinedexpected: true

// isPalindrome("Go hang a salami, I'm a lasagna hog") = undefinedexpected: true

// isPalindrome("a_ba") = undefinedexpected: true

// isPalindrome("Est ut harum consequatur non tenetur animi..imina rutenet non rutauqesnoc murah tu tsE") = undefinedexpected: true

// isPalindrome("Natus voluptas magni consequuntur dolor..rolod rutnuuqesnoc ingam satpulov sutaN") = undefinedexpected: true

// isPalindrome("Quibusdam quia rem odio.") = undefinedexpected: false