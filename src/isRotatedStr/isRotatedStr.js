export function isRotatedStr(x, y) {
  // x and y are strings;
  // return boolean
  // (ex. x="vwxyz", y="xyzvw", you should return true because we when shifting v and w to the rightmost
  // it will match y)
  if (x === y) { return true }
  else if (!(x.length === y.length)) { return false }
  return x.split('').some((char, index, arr) => {
    const newWord = [...arr.slice(index), ...arr.slice(0, index)].join('')
    return newWord === y
  })

};