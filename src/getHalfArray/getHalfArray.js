
export function getHalfArray(x) {
  // x is an array
  // return an array
  // (ex. [1,2,1,3,4] should return [1,2,1])
  const limit = Math.ceil(x.length / 2)
  return x.slice(0, limit)
}
