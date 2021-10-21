
const solutions = {
  "cube": `function (x) {
    return Math.pow(x, 3)
  }`,
  "ticTacToeWinner": `function(a){const b="o",c=(a,b)=>b.some(b=>b.every(b=>b===a)),d=a=>(console.log(a,"this is"),a.reduce((a,b,c,d)=>{const e=d.map(a=>a[c]);return[...a,e]},[])),e=a=>a.reduce((a,b,c,d)=>{const[e=[],f=[]]=a,g=d.length-1-c;return[[...e,d[c][c]],[...f,d[c][g]]]},[]),f=c("x",a)||c("x",d(a))||c("x",e(a)),g=c(b,a)||c(b,d(a))||c(b,e(a));return f&&g?"error":f?"x":g?b:"draw"}`,
  "missingInteger": `function(a){if(0===a.length)return 1;a.sort((c,a)=>c-a);const b=a.findIndex(b=>!a.some(a=>(console.log({secondEl:a,el:b}),a===b+1)));return a[b]+1}`,

  "getType": `function(x){return typeof x}`,
  "sortArrayDesc": `function(a){return a.sort((c,a)=>a>c?1:-1)}`,
  "removeAllSpaces": `function(a){return a.split(" ").join("")}`,

  "reverseCase": `function(a){const b={min:65,max:90},c={min:97,max:122},d=a=>a>=b.min&&a<=b.max,e=a=>a>=c.min&&a<=c.max;return a.split("").reduce((a,b)=>{const c=b.charCodeAt(0);return d(c)?a+b.toLowerCase():e(c)?a+b.toUpperCase():a+b},"")}`,
  "reverseAllWords": `function(a){return a.split("").reverse().join("").split(" ").reverse().join(" ")}`,


  "multiplierCount": `function(a,b){return[...Array(a)].reduce((c,d,e)=>(console.log(c,e),(e+1)*b<=a?c+1:c),0)}`,
  "squareRoot": `function(x){return Math.sqrt(x)}`,
  "replaceSpaces": `function(a){return encodeURI(a)}`,
  "numberOfCircles": `function(a){a=Math.abs(a);const b=[1,0,0,0,0,0,1,0,2,1];return a.toString().split("").map(a=>b[parseInt(a)]).reduce((c,a)=>c+a)}`,
  "findWord": `function(a,b){const c=b.toLowerCase().search(a.toLowerCase());return-1<c?[c,c+a.length-1]:[]}`,
  "arrayToObject": `function(a){return 0<a.length?a.reduce((a,[b,c])=>!b?a:{...a,[b]:c},{}):a}`,

  "binaryToNumber": `function(n){return parseInt(n,2)}`,
  "findAverage": `function(e){return Math.ceil(e.reduce((e,n,t,c)=>t===c.length-1?(e+n)/c.length:e+n,0))}`,

  "matchingType": `function(t,n){return typeof t==typeof n}`,

  "reverseString": `function(n){return n.split("").reverse().join("")}`,

  "countUniqueNumbers": `function(n){return[...new Set(n)].length}`,

  "numberRepresentation": `function(t){const n=[...new Set(t)].sort();var e=n.reduce((n,e)=>[...n,t.filter(n=>n===e).length],[]).join("");return parseInt(e)||0}`,

  "charCountInString": `function(e,n){return n.split("").filter(n=>n===e).length}`,
  "findUniqueNumber": `function(n){return n.reduce((n,e,t,r)=>{return[...r.slice(0,t),...r.slice(t+1)].some(n=>n===e)?n:[...n,e]},[])[0]}`,

  "getHalfArray": `function(n){var e=Math.ceil(n.length/2);return n.slice(0,e)}`
  ,
  "removeDuplicates": `function(n){return[...new Set(n.split(""))].join("")}`,

  "monthToString": `function(t){const n=new Date(2e3,t-1);return n.toLocaleString("default",{month:"short"})}`,


  "twoArrayAvg": `function(t,n){var e=t=>t.reduce((t,n,e,r)=>(t+=n,e===r.length-1?t/r.length:t),0);return(e(t)+e(n))/2}`,

  "firstUniqueChar": `function(t){return t.split("").reduce((t,n,e,r)=>{const o=[...r.slice(0,e),...r.slice(e+1)];return o.some(t=>t===n)||0!==t.length?t:[n]},[]).join("")||!1}`,

  "digitOccurrence": `function(t,r){return[...Array(t+1)].reduce((n,t,e)=>(e.toString().split("").forEach(t=>{t===r.toString()&&(n+=1)}),n),0)}`,

  "isRotatedStr": `function(t,r){return t===r||t.length===r.length&&t.split("").some((t,n,e)=>{return[...e.slice(n),...e.slice(0,n)].join("")===r})}`,

  "hexToRGB": `function(t){var[,n,e,r,o,c,t]=t.split("");return[parseInt(n+e,16),parseInt(r+o,16),parseInt(c+t,16)]}`,

  "averageAsciiChar": `function(e){e=e.split("").reduce((e,n,r,t)=>(e+=n.charCodeAt(0),r===t.length-1?e/t.length:e),0);return String.fromCharCode(Math.round(e))}`,

  "hashPassword": `function(e,i){var a={min:48,max:57},u={min:65,max:90},o={min:97,max:122};return e.split("").map(e=>{var n,r=e.charCodeAt(0);if(a.min<=(n=r)&&n<a.max)return(parseInt(e)+i)%10;if(u.min<=(e=r)&&e<=u.max){var t=(r+i-u.min)%26;return String.fromCharCode(o.min+t)}if(o.min<=(t=r)&&t<=o.max){t=(r+i-o.min)%26;return String.fromCharCode(u.min+t)}return String.fromCharCode(r+i)}).join("")}`,

  "validateIP": `function(e){const n=e.split(".");return 4===n.length&&n.every(e=>(e=>{const n=new RegExp("^[0-9]+$");return n.test(e)})(e)&&parseInt(e)<256)}`,

  "isPrime": `function(r){if(r<1)return!1;const e=[...Array(r)];return!e.some((e,n)=>{n+=1;return n<r&&1<n&&r%n==0})}`,
  'isAnagram': `function(t,n){return t.split("").sort().join("")===n.split("").sort().join("")}`,

  "romanToInt": `function(e){const m=[{key:"I",value:1},{key:"V",value:5},{key:"X",value:10},{key:"L",value:50},{key:"C",value:100},{key:"D",value:500},{key:"M",value:1e3}];return e.split("").reduce((e,n,r,t)=>{var i=m.findIndex(e=>e.key===n),a=m.findIndex(e=>0<r&&e.key===t[r-1]),u=-1===a,o=a+1<=i;return u||!u&&!o?e+m[i].value:!u&&o?e+m[i].value-2*m[a].value:e},0)}`,
  "isPalindrome": `function(e){if("string"==typeof e&&""===e)return!0;const n=e.toLowerCase().match(/[a-zA-Z]+/g).join("");return n.split("").reverse().join("")===n}`
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
