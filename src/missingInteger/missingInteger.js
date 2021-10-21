
export function missingInteger(x) {

  if (x.length === 0) return 1
  x.sort((a, b) => a - b)
  const index = x.findIndex((el) => !x.some(secondEl => {
    console.log({ secondEl, el })
    return secondEl === el + 1
  }))
  return x[index] + 1
};
