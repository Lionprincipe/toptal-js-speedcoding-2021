export function isPalindrome(x) {
  // x is a string
  // return boolean
  // (ex. x="Pull up!", you should return true)

  if (typeof x === "string" && x === "") return true

  const chars = x.toLowerCase().match(/[a-zA-Z]+/g).join("")
  return chars.split("").reverse().join("") === chars

};

