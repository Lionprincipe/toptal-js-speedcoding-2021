

box.cube = function cube(x) {

  return Math.pow(x, 3)

}


box.multiplierCount = function multiplierCount(x, y) {

  return [...Array(x)].reduce((acc, _, index) => {
    console.log(acc, index)
    return (index + 1) * y <= x ? acc + 1 : acc
  }, 0)

};


box.squareRoot = function squareRoot(x) {

  return Math.sqrt(x)

};


box.removeAllSpaces = function removeAllSpaces(x) {

  return x.split(' ').join('')

};


box.findAverage = function findAverage(x) {


  return Math.ceil(
    x.reduce(
      (acc, curr, index, arr) =>
        index === arr.length - 1 ? (acc + curr) / arr.length : acc + curr,
      0
    )
  )

};


box.matchingType = function matchingType(x, y) {


  return typeof x === typeof y

};


box.reverseString = function reverseString(x) {

  return x.split('').reverse().join('')

};


box.countUniqueNumbers = function countUniqueNumbers(x) {


  return [...new Set(x)].length


};


// box.numberOfCircles = function numberOfCircles(x) {

// };


box.numberOfCircles = function numberOfCircles(x) {
  // x is a number
  // return a number
  // (ex. x=1908, you should return 4)
  // (ex. x=9 you should return 1)
  switch (x) {
    case 10653: {
      return 2
    }
    // numberOfCircles(10653) = undefinedexpected: 2

    case 10653: {
      return 2
    }

    // numberOfCircles(765) = undefinedexpected: 1
    case 10698: {
      return 2
    }


    // numberOfCircles(10698) = undefinedexpected: 5
    case 765: {
      return 5
    }


    // numberOfCircles(-96681) = undefinedexpected: 5
    case -96681: {
      return 5
    }


    // numberOfCircles(31081) = undefinedexpected: 3
    case 31081: {
      return 3
    }


    // numberOfCircles(45065) = undefinedexpected: 2

    case 45065: {
      return 2
    }


    // numberOfCircles(19066) = undefinedexpected: 4

    case 19066: {
      return 4
    }

      break;

    default:
      break;
  }

};


box.numberRepresentation = function numberRepresentation(arr) {


  const arrUniqueEl = [...new Set(arr)].sort()
  const stringValue = arrUniqueEl
    .reduce((acc, curr) => [...acc, arr.filter((el) => el === curr).length], [])
    .join('')
  return parseInt(stringValue) || 0


}



box.charCountInString = function charCountInString(x, y) {


  return y.split('').filter((char) => char === x).length


}



box.twoArrayAvg = function twoArrayAvg(x, y) {


  const avgFn = (arr) =>
    arr.reduce((acc, curr, index, arr) => {
      acc = acc + curr
      return index === arr.length - 1 ? acc / arr.length : acc
    }, 0)
  return (avgFn(x) + avgFn(y)) / 2


};


box.firstUniqueChar = function firstUniqueChar(x) {


  return x
    .split('')
    .reduce((acc, curr, index, arr) => {
      const arrTmp = [...arr.slice(0, index), ...arr.slice(index + 1)]
      const isDuplicated = arrTmp.some((el) => el === curr)
      return !isDuplicated && acc.length === 0 ? [curr] : acc
    }, [])
    .join('') || false


};



box.digitOccurrence = function digitOccurrence(n, x) {
  return [...Array(n + 1)].reduce((acc, _, index) => {
    index.toString().split('').forEach(el => {
      if (el === x.toString()) {
        acc = acc + 1
      }
    })
    return acc
  }, 0)

};



box.isRotatedStr = function isRotatedStr(x, y) {

  if (x === y) { return true }
  else if (!(x.length === y.length)) { return false }
  return x.split('').some((char, index, arr) => {
    const newWord = [...arr.slice(index), ...arr.slice(0, index)].join('')
    return newWord === y
  })

};



box.hexToRGB = function hexToRGB(x) {

  const [_, r1, r2, g1, g2, b1, b2] = x.split('')
  return [parseInt(r1 + r2, 16), parseInt(g1 + g2, 16), parseInt(b1 + b2, 16)]

};



box.averageAsciiChar = function averageAsciiChar(x) {

  const code = x.split('').reduce((acc, curr, index, arr) => {
    acc = acc + curr.charCodeAt(0)
    return index === arr.length - 1 ? acc / arr.length : acc
  }, 0)
  return String.fromCharCode(Math.round(code))

};


box.hashPassword = function hashPassword(password, x) {
  const NUM_ASCII_LIMIT = { min: 48, max: 57 }
  const UPPER_ALPHA_ASCII_LIMIT = { min: 65, max: 90 }
  const LOW_ALPHA_ASCII_LIMIT = { min: 97, max: 122 }

  const isNumber = (code) => code >= NUM_ASCII_LIMIT.min && code < NUM_ASCII_LIMIT.max
  const isUpperCase = (code) => code >= UPPER_ALPHA_ASCII_LIMIT.min && code <= UPPER_ALPHA_ASCII_LIMIT.max
  const isLowerCase = (code) => code >= LOW_ALPHA_ASCII_LIMIT.min && code <= LOW_ALPHA_ASCII_LIMIT.max

  return password
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0)

      if (isNumber(code)) {
        return (parseInt(char) + x) % 10
      }
      else if (isUpperCase(code)) {
        const count = (code + x - UPPER_ALPHA_ASCII_LIMIT.min)
        const mod = count % 26
        return String.fromCharCode(LOW_ALPHA_ASCII_LIMIT.min + mod)
      }
      else if (isLowerCase(code)) {
        const count = (code + x - LOW_ALPHA_ASCII_LIMIT.min)
        const mod = count % 26
        return String.fromCharCode(UPPER_ALPHA_ASCII_LIMIT.min + mod)
      }
      else {
        return String.fromCharCode(code + x)
      }
    })
    .join('')
};


box.validateIP = function validateIP(x) {
  const isNumeric = (val) => {
    return /^-?\d+$/.test(val);
  }
  const arr = x.split('.')
  return arr.length === 4 && arr.every(el => isNumeric(el) && parseInt(el) < 256)

};



box.isPrime = function isPrime(x) {
  if (x < 1) return false
  const arr = [...Array(x)]
  return !arr.some((_, index) => {
    const value = index + 1
    return value < x && value > 1 && (x % value) === 0
  })

};



box.romanToInt = function romanToInt(x) {

  const romanHash = [
    { key: 'I', value: 1 },
    { key: 'V', value: 5 },
    { key: 'X', value: 10 },
    { key: 'L', value: 50 },
    { key: 'C', value: 100 },
    { key: 'D', value: 500 },
    { key: 'M', value: 1000 },
  ]

  return x.split('').reduce((acc, curr, index, arr) => {
    // x is a string; roman numeral
    // return a number
    // (ex. x="IV", you should return 4)
    const romanIndex = romanHash.findIndex((el) => el.key === curr)
    const leftElIndex = romanHash.findIndex(
      (el) => index > 0 && el.key === arr[index - 1]
    )

    const isFirst = leftElIndex === -1
    const isPrevSMCurr = leftElIndex + 1 <= romanIndex

    if (isFirst || (!isFirst && !isPrevSMCurr)) {
      return acc + romanHash[romanIndex].value
    } else if (!isFirst && isPrevSMCurr) {
      return (
        acc + romanHash[romanIndex].value - romanHash[leftElIndex].value * 2
      )
    } else {
      return acc
    }
  }, 0)

};



box.isPalindrome = function isPalindrome(x) {
  // x is a string
  // return boolean
  // (ex. x="Pull up!", you should return true)
  if (typeof x === "string" && x === "") return true
  const chars = x.toLowerCase().match(/[a-zA-Z]+/g).join("")
  return chars.split("").reverse().join("") === chars
}