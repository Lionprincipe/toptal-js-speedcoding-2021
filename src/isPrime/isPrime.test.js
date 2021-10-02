import { isPrime } from './isPrime'
const testData = [
  { input: 0, expected: false },
  { input: 1, expected: true },
  { input: 11, expected: true },
  { input: 9, expected: false },
  { input: 89, expected: true },
  { input: 3193, expected: false },
  { input: 9400, expected: false },
  { input: 9188, expected: false }
]

test.each(testData)('test is prime', ({ input, expected }) => {
  expect(isPrime(input)).toBe(expected)
})