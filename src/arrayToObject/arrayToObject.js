export function arrayToObject(x) {
  // x is an array
  // return an object
  // (ex. x=[["key", "value"], ["numb", 123], ["bool", true]], you should return {"key": "value", "bool": true, "numb": 123})

  return x.length > 0 ? x.reduce((acc, [key, value]) => !!key ? ({ ...acc, [key]: value }) : acc, {}) : x
};



