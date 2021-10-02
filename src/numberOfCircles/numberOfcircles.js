export function numberOfCircles(x) {
  x = Math.abs(x)
  const circles = [1, 0, 0, 0, 0, 0, 1, 0, 2, 1]
  return x.toString().split('').map(n => circles[parseInt(n)]).reduce((a, b) => a + b)
}


