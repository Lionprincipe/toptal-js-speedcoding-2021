export function findWord(word, sentence) {
  // Given word and sentence as two strings,
  // Return the start and end indices of the word in the sentence as an array
  // (ex. word="morning" sentence="Good morning coders!" should return [5,11])
  const index = sentence.toLowerCase().search(word.toLowerCase())
  return index > -1 ? [index, index + word.length - 1] : []
}