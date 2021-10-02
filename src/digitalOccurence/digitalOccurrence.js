export function digitOccurrence(n, x) {
  // n is an integer, x is a single-digit number
  // return a number
  // (ex. n=11, x=1, it should return 4 because ‘1’ appears up 4 times between 0 and 11)


  return [...Array(n + 1)].reduce((acc, _, index) => {
    index.toString().split('').forEach(el => {
      if (el === x.toString()) {
        acc = acc + 1
      }
    })
    return acc
  }, 0)
};