
export function validateIP(x) {
  // x is a string in the format of "X.X.X.X"
  // return boolean
  // (ex. x="127.0.0.1", you should return true)
  // (ex. x="555.123.123.1". you should return false because first part is greater than 255)
  const isNumeric = (val) => {
    const regex = new RegExp("^[0-9]+$");
    return regex.test(val);
  }
  const arr = x.split('.')
  return arr.length === 4 && arr.every(el => isNumeric(el) && parseInt(el) < 256)
};

