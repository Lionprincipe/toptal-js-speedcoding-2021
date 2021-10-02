
export function romanToInt(x) {
  const romanHash = [
    { key: 'I', value: 1 },
    { key: 'V', value: 5 },
    { key: 'X', value: 10 },
    { key: 'L', value: 50 },
    { key: 'C', value: 100 },
    { key: 'D', value: 500 },
    { key: 'M', value: 1000 },
  ]

  return x.split('').reduce((acc, curr, index, arr) => {
    // x is a string; roman numeral
    // return a number
    // (ex. x="IV", you should return 4)
    const romanIndex = romanHash.findIndex((el) => el.key === curr)
    const leftElIndex = romanHash.findIndex(
      (el) => index > 0 && el.key === arr[index - 1]
    )

    const isFirst = leftElIndex === -1
    const isPrevSMCurr = leftElIndex + 1 <= romanIndex

    if (isFirst || (!isFirst && !isPrevSMCurr)) {
      return acc + romanHash[romanIndex].value
    } else if (!isFirst && isPrevSMCurr) {
      return (
        acc + romanHash[romanIndex].value - romanHash[leftElIndex].value * 2
      )
    } else {
      return acc
    }
  }, 0)
}
