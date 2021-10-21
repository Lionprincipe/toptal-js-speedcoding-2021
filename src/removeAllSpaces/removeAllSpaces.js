
export function removeAllSpaces(x) {
  // x is a string
  // return a string
  // (ex. x="   Test   String! ", you should return "TestString!")
  // return x.replace(/\s+/g, '')
  return x.split(" ").join('')
};