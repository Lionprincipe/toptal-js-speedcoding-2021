export function findUniqueNumber(x) {
  return x.reduce((acc, curr, index, arr) => {
    const isDuplicated = [...arr.slice(0, index), ...arr.slice(index + 1)].some(el => el === curr)
    return !isDuplicated ? [...acc, curr] : acc
  }, [])[0]
};
