
const solutions = {
  "cube": `function (x) {
    return Math.pow(x, 3)
  }`,
  "ticTacToeWinner": `function (x) {
  const PLAYER_ONE_SYMBOL = "x"
  const PLAYER_TWO_SYMBOL = "o"
  const DRAW_SYMBOL = "draw"
  const ERROR_MESSAGE = "error"
  const checkForWinningRow = (value, arrDouble) => {
    return arrDouble.some((arr) => arr.every(el => el === value))
  }

  const reverseCollumnToRow = (arrDouble) => {
    console.log(arrDouble, "this is")
    return arrDouble.reduce((acc, curr, index, arr) => {
      const collumn = arr.map(el => el[index])
      return [...acc, collumn]
    }, [])
  }
  const getDiagonales = (arrDouble) => {
    return arrDouble.reduce((acc, curr, index, arr) => {
      const [diagAsc = [], diagDesc = []] = acc
      const inversedIndex = arr.length - 1 - index
      return [[...diagAsc, arr[index][index]], [...diagDesc, arr[index][inversedIndex]]]
    }, [])
  }

  const isPlayerOneWins = checkForWinningRow(PLAYER_ONE_SYMBOL, x)
    || checkForWinningRow(PLAYER_ONE_SYMBOL, reverseCollumnToRow(x))
    || checkForWinningRow(PLAYER_ONE_SYMBOL, getDiagonales(x))
  const isPlayerTwoWins = checkForWinningRow(PLAYER_TWO_SYMBOL, x)
    || checkForWinningRow(PLAYER_TWO_SYMBOL, reverseCollumnToRow(x))
    || checkForWinningRow(PLAYER_TWO_SYMBOL, getDiagonales(x))

  if (isPlayerOneWins && isPlayerTwoWins) {
    return ERROR_MESSAGE
  } else if (isPlayerOneWins) { return PLAYER_ONE_SYMBOL }
  else if (isPlayerTwoWins) { return PLAYER_TWO_SYMBOL }
  else {
    return DRAW_SYMBOL
  }
}`,
  "missingInteger": `function (x) {
    if (x.length === 0) return 1
    x.sort((a, b) => a - b)
    const index = x.findIndex((el) => !x.some(secondEl => {
      console.log({ secondEl, el })
      return secondEl === el + 1
    }))
    return x[index] + 1
  }`,

  "getType": `function(x) {
    return typeof x
  }`,
  "sortArrayDesc": `function (x) {
    return x.sort((a, b) => b > a ? 1 : -1)
  }`,
  "removeAllSpaces": `function (x) {
     return x.split(" ").join('')
  }`,

  "reverseCase": `function (x) {

    const UPPER_ALPHA_ASCII_LIMIT = { min: 65, max: 90 }
    const LOW_ALPHA_ASCII_LIMIT = { min: 97, max: 122 }

    const isUpperCase = (code) => code >= UPPER_ALPHA_ASCII_LIMIT.min && code <= UPPER_ALPHA_ASCII_LIMIT.max
    const isLowerCase = (code) => code >= LOW_ALPHA_ASCII_LIMIT.min && code <= LOW_ALPHA_ASCII_LIMIT.max
    return x.split('').reduce((acc, char) => {
      const code = char.charCodeAt(0)
      if (isUpperCase(code)) {
        return acc + char.toLowerCase()
      } else if (isLowerCase(code)) {
        return acc + char.toUpperCase()
      } else {
        return acc + char
      }
    }, "")

  }`,
  "reverseAllWords": `function (x) {
    // x is a string
    // return a string
    // (ex. x="Hello from Toptal", you should return "olleH morf latpoT")

    return x.split('').reverse().join('').split(' ').reverse().join(" ")

  }`,


  "multiplierCount": `function (x, y) {
    return [...Array(x)].reduce((acc, _, index) => {
      console.log(acc, index)
      return (index + 1) * y <= x ? acc + 1 : acc
    }, 0)

  }`,
  "squareRoot": `function (x) {
    return Math.sqrt(x)
  }`,
  "replaceSpaces": `function (x) {
    // x is a string
    // return a string
    // (ex. x="hello world", you should return "hello%20world")
    return encodeURI(x)

  }`,
  "numberOfCircles": `function (x) {
    x = Math.abs(x)
    const circles = [1, 0, 0, 0, 0, 0, 1, 0, 2, 1]
    return x.toString().split('').map(n => circles[parseInt(n)]).reduce((a, b) => a + b)
  }`,
  "findWord": `function (word, sentence) {
    // Given word and sentence as two strings,
    // Return the start and end indices of the word in the sentence as an array
    // (ex. word="morning" sentence="Good morning coders!" should return [5,11])
    const index = sentence.toLowerCase().search(word.toLowerCase())
    return index > -1 ? [index, index + word.length - 1] : []
  }`,
  "arrayToObject": `function (x) {
    return x.length > 0 ? x.reduce((acc, [key, value]) => !!key ? ({ ...acc, [key]: value }) : acc, {}) : x
  }`,

  "binaryToNumber": `function (x) {
    return parseInt(x, 2);

  }`,
  "findAverage": `function (x) {
    return Math.ceil(
      x.reduce(
        (acc, curr, index, arr) =>
          index === arr.length - 1 ? (acc + curr) / arr.length : acc + curr,
        0
      )
    )

  }`,

  "matchingType": `function (x, y) {


    return typeof x === typeof y

  }`,

  "reverseString": `function (x) {

    return x.split('').reverse().join('')

  }`,

  "countUniqueNumbers": `function (x) {


    return [...new Set(x)].length


  }`,

  "numberRepresentation": `function (arr) {


    const arrUniqueEl = [...new Set(arr)].sort()
    const stringValue = arrUniqueEl
      .reduce((acc, curr) => [...acc, arr.filter((el) => el === curr).length], [])
      .join('')
    return parseInt(stringValue) || 0


  }`,

  "charCountInString": `function (x, y) {


    return y.split('').filter((char) => char === x).length


  }`,
  "findUniqueNumber": `function (x) {
    return x.reduce((acc, curr, index, arr) => {
      const isDuplicated = [...arr.slice(0, index), ...arr.slice(index + 1)].some(el => el === curr)
      return !isDuplicated ? [...acc, curr] : acc
    }, [])[0]
  }`,

  "getHalfArray": `function (x) {
    const limit = Math.ceil(x.length / 2)
    return x.slice(0, limit)
  }`
  ,
  "removeDuplicates": `function (x) {

    return [...new Set(x.split(''))].join('')

  }`,

  "monthToString": `function (x) {
    // x is a number
    // return a string
    // (ex. x=1, you should return "Jan")
    const FIX_YEAR = 2000
    const date = new Date(FIX_YEAR, x - 1)
    return date.toLocaleString('default', { month: 'short' })
  }`,


  "twoArrayAvg": `function (x, y) {


    const avgFn = (arr) =>
      arr.reduce((acc, curr, index, arr) => {
        acc = acc + curr
        return index === arr.length - 1 ? acc / arr.length : acc
      }, 0)
    return (avgFn(x) + avgFn(y)) / 2


  }`,

  "firstUniqueChar": `function (x) {


    return x
      .split('')
      .reduce((acc, curr, index, arr) => {
        const arrTmp = [...arr.slice(0, index), ...arr.slice(index + 1)]
        const isDuplicated = arrTmp.some((el) => el === curr)
        return !isDuplicated && acc.length === 0 ? [curr] : acc
      }, [])
      .join('') || false


  }`,

  "digitOccurrence": `function (n, x) {
    return [...Array(n + 1)].reduce((acc, _, index) => {
      index.toString().split('').forEach(el => {
        if (el === x.toString()) {
          acc = acc + 1
        }
      })
      return acc
    }, 0)

  }`,

  "isRotatedStr": `function (x, y) {

    if (x === y) { return true }
    else if (!(x.length === y.length)) { return false }
    return x.split('').some((char, index, arr) => {
      const newWord = [...arr.slice(index), ...arr.slice(0, index)].join('')
      return newWord === y
    })

  }`,

  "hexToRGB": `function (x) {

    const [_, r1, r2, g1, g2, b1, b2] = x.split('')
    return [parseInt(r1 + r2, 16), parseInt(g1 + g2, 16), parseInt(b1 + b2, 16)]

  }`,

  "averageAsciiChar": `function (x) {

    const code = x.split('').reduce((acc, curr, index, arr) => {
      acc = acc + curr.charCodeAt(0)
      return index === arr.length - 1 ? acc / arr.length : acc
    }, 0)
    return String.fromCharCode(Math.round(code))

  }`,

  "hashPassword": `function (password, x) {
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
  }`,

  "validateIP": `function (x) {
    const isNumeric = (val) => {
          const regex = new RegExp("^[0-9]+$");
    return regex.test(val);
    }
    const arr = x.split('.')
    return arr.length === 4 && arr.every(el => isNumeric(el) && parseInt(el) < 256)

  }`,
  'isAnagram': ` function (x, y) {
    return x.split('').sort().join('') === y.split('').sort().join('')
}`,

  "isPrime": `function (x) {
    if (x < 1) return false
    const arr = [...Array(x)]
    return !arr.some((_, index) => {
      const value = index + 1
      return value < x && value > 1 && (x % value) === 0
    })

  }`,

  "romanToInt": `function (x) {

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

  }
`,
  "isPalindrome": ` function (x) {
    // x is a string
    // return boolean
    // (ex. x="Pull up!", you should return true)
    if (typeof x === "string" && x === "") return true
    const chars = x.toLowerCase().match(/[a-zA-Z]+/g).join("")
    return chars.split("").reverse().join("") === chars
  }
`
}


const myXpath =
  '//*[@id="page_react_container"]/div/div[5]/div[2]/div/button'

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


const get_submit_button = () => getElementByXpath(myXpath);

const solve = () => {

  const ace_editor = ace.edit(document.querySelector('.ace_editor'))
  const submission = ace_editor.getValue()
  // const key = submission.split(' ')[3]
  for (const key in solutions) {

    if (submission.includes('box.' + key + ' ')) {
      ace_editor.gotoPageDown()
      // ace_editor.destroy()
      ace_editor.insert(`;box.${key}=${solutions[key]}`)
      get_submit_button().click()
      setTimeout(() => {
        get_submit_button().click()
        setTimeout(() => {
          solve()
        }, 400)
      }, 900)
      return
    }
  }
}
solve()



// const targetNode = document.body;
// const config = { childList: true, subtree: true };

// const callback = function (mutationsList, observer) {
//   for (let mutation of mutationsList) {
//     if (mutation.type === 'childList') {
//       solve()
//       console.log("something has changed")
//     }
//   }
// };

// const observer = new MutationObserver(callback);
// observer.observe(targetNode, config);
