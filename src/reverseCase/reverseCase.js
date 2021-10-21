

export function reverseCase(x) {

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

};