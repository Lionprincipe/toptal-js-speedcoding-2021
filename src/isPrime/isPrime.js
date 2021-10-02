export function isPrime(x) {
  // x is a number
  // return boolean
  // (ex. x=11, you should return true because 11 is a prime number)\
  if (x < 1) return false
  const arr = [...Array(x)]
  return !arr.some((_, index) => {
    const value = index + 1
    return value < x && value > 1 && (x % value) === 0
  })

}