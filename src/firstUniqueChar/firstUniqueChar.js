
export function firstUniqueChar(x) {
  // x is a string
  // return a string
  // (ex. x="toptal", you should return "o" because "t" appeared twice)
  return x
    .split('')
    .reduce((acc, curr, index, arr) => {
      const arrTmp = [...arr.slice(0, index), ...arr.slice(index + 1)]
      const isDuplicated = arrTmp.some((el) => el === curr)
      return !isDuplicated && acc.length === 0 ? [curr] : acc
    }, [])
    .join('') || false
};