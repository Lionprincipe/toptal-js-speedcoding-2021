export function numberRepresentation(arr) {
  // arr is an array
  // return a number
  // (ex. arr=[b,a,a,a,c,b,a] you should return 421 where 4 represents 'a' occurences, 2 for 'b', etc..)
  const arrUniqueEl = [...new Set(arr)].sort()
  const stringValue = arrUniqueEl
    .reduce((acc, curr) => [...acc, arr.filter((el) => el === curr).length], [])
    .join('')
  return parseInt(stringValue) || 0


}