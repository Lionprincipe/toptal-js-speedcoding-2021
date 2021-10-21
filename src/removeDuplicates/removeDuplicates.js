
export function removeDuplicates(x) {
  // x is a string
  // return a string
  // (ex. x="hello world", you should return "helo wrd")
  return [...new Set(x.split(''))].join('')

};
