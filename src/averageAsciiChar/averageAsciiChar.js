export function averageAsciiChar(x) {
  // x is a string
  // return a character
  // (ex. x="Hello World!", you should return "Z")

  const code = x.split('').reduce((acc, curr, index, arr) => {
    acc = acc + curr.charCodeAt(0)
    return index === arr.length - 1 ? acc / arr.length : acc
  }, 0)
  // console.log({ x, code, ciel: Math.ceil(code), floor: Math.floor(code), round: Math.round(code) })
  return String.fromCharCode(Math.round(code))


};