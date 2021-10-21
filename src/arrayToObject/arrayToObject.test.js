import { arrayToObject } from "./arrayToObject"

const testData = [
  { value: [["key", "value"], ["numb", 123], ["bool", true]], expected: { "key": "value", "bool": true, "numb": 123 } },

  { value: [["arr", []], ["google", "8.8.8.8"], ["obj", { "a": 1 }]], expected: { "arr": [], "obj": { "a": 1 }, "google": "8.8.8.8" } },

  { value: [], expected: [] },

  { value: [["facere", -380], ["iure", true], ["quas", false], ["at", true], ["autem", -509], ["soluta", 64]], expected: { "facere": -380, "iure": true, "quas": false, "at": true, "autem": -509, "soluta": 64 } },

  { value: [["optio", -352], ["tempora", "Est dolores nihil quis aut saepe et minima."]], expected: { "optio": -352, "tempora": "Est dolores nihil quis aut saepe et minima." } },

  { value: [["ut", -877], ["minima", "Et esse inventore autem et aliquam qui."], ["vel", true], ["rerum", false], ["non", "Rerum quia natus harum."], ["sunt", false], ["veniam", 278], ["inventore", "Id ea velit a officiis."], ["natus", false]], expected: { "ut": -877, "minima": "Et esse inventore autem et aliquam qui.", "vel": true, "rerum": false, "non": "Rerum quia natus harum.", "sunt": false, "veniam": 278, "inventore": "Id ea velit a officiis.", "natus": false } },
]




test.each(testData)('test is arrayToObject', ({ value, expected }) => {
  console.log({
    value, recieived: arrayToObject(value), expected
  })
  expect(arrayToObject(value)).toEqual(expected)
})