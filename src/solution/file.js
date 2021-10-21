const targetNode = document.body;
const config = { childList: true, subtree: true };

const callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // Elements have changed
      console.log("something has changed")
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);


box.getType = function getType(x) {
  // x is a variable of a random type
  // return the data type of x
  // (ex. x="hello" should return "string")

};
getType("hello") = undefinedexpected: "string"

getType(false) = undefinedexpected: "boolean"

getType(1) = undefinedexpected: "number"

getType(10.5) = undefinedexpected: "number"

getType(927) = undefinedexpected: "number"

getType(38) = undefinedexpected: "number"

getType(71) = undefinedexpected: "number"