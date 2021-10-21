import { ticTacToeWinner } from "./ticTacToeWinner"

const testData = [
  { value: [["x", "o", "x"], ["o", "x", "o"], ["o", "o", "x"]], expected: "x" },

  // { value: [["x", "o", "o"], ["x", "x", "o"], ["x", "o", "o"]], expected: "error" },

  // { value: [["x", "o", "x"], ["o", "o", "o"], ["o", "x", "x"]], expected: "o" },

  // { value: [["x", "x", "o"], ["o", "x", "o"], ["x", "o", "x"]], expected: "x" },

  // { value: [["o", "o", "x"], ["o", "o", "x"], ["x", "x", "o"]], expected: "o" },

  // { value: [["x", "o", "o"], ["o", "x", "o"], ["x", "o", "x"]], expected: "x" },

  // { value: [["o", "o", "x"], ["o", "o", "x"], ["x", "x", "o"]], expected: "o" },
]




test.each(testData)('test is ticTacToeWinner', ({ value, expected }) => {
  console.log({
    value, recieived: ticTacToeWinner(value), expected
  })
  expect(ticTacToeWinner(value)).toEqual(expected)
})
