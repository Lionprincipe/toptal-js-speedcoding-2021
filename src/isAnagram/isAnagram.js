
export function isAnagram(x, y) {
  // x and y are strings.
  // return boolean
  // (ex. x="heart", y="earth", you should return true)
  return x.split('').sort().join('') === y.split('').sort().join('')
};