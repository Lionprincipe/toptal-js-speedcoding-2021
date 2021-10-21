export function reverseAllWords(x) {
  // x is a string
  // return a string
  // (ex. x="Hello from Toptal", you should return "olleH morf latpoT")

  return x.split('').reverse().join('').split(' ').reverse().join(" ")

};
