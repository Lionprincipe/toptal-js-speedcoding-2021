export function hashPassword(password, x) {
  // password is a string, x is a number
  // return a string
  // (ex. password = 'ab1By', x = 3 so you should return "DE4eB")
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


