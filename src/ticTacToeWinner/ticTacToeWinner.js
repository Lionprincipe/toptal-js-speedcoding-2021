export function ticTacToeWinner(x) {
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
};