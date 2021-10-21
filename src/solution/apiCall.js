requests = {
  cube: {
    tests_json: `{ "test1": 8, "test2": 64, "test3": -3.375, "test4": -1728, "test5": 1, "rnd_jti_Candace": 8000, "rnd_aon_Donnell": 10648, "rnd_ebr_Tillman": 64 }`,
    code: `box.cube = box.cube = function (x) {
      return Math.pow(x, 3)
    }`
  },
  multiplierCount: {
    tests_json: `{ "test1": 3, "test2": 100, "test3": 1, "test4": 13, "rnd_jgi_Torrance": 4, "rnd_fnl_Domenico": 2, "rnd_noj_Noe": 2 }`,
    code: `box.multiplierCount = function (a, b) { return [...Array(a)].reduce((c, d, e) => (console.log(c, e), (e + 1) * b <= a ? c + 1 : c), 0) };`
  },
  removeAllSpaces: {
    tests_json: `{ "test1": "HelloWorld!", "test2": "LoremIpsum!", "test3": "Removespaces", "rnd_rln_Katelyn": "ametquidoloreadsint", "rnd_yjp_Kellie": "voluptasoditaliasinquasi", "rnd_pka_Vincenzo": "hictenetursitliberodoloremque" }`,
    code: `box.removeAllSpaces = function (a) { return a.split(" ").join("") }`
  },

  getType: {
    tests_json: `{ "test1": "string", "test2": "boolean", "test3": "number", "test4": "number", "rnd_cnk_Pasquale": "number", "rnd_xso_Marianna": "boolean", "rnd_ckz_Rosina": "number" }`,
    code: `box.getType = function (x) { return typeof x }`
  },
  getHalfArray: {
    tests_json: `{ "test1": [1, 2], "test2": [1, 2], "test3": [1], "test4": [], "rnd_wvk_Virginia": ["Quasi fugit in cumque ut.", 173, ["qui", "itaque", "odit"], "et", ["possimus", "error", "quas"]], "rnd_jfa_Shanelle": ["Quisquam aut voluptatum dolores itaque."], "rnd_owf_Addie": [true, ["odit", "dicta", "nisi"], "Neque debitis nulla rem vel nulla voluptas.", "odio"] }`,
    code: `box.getHalfArray = function (n) { var e = Math.ceil(n.length / 2); return n.slice(0, e) }`
  },
  replaceSpaces: {
    tests_json: `{ "test1": "hello%20world", "test2": "this%20could%20be%20longest%20string,%20yet%20we%20never%20know.", "test3": "may%20the%204th%20be%20with%20you", "test4": "%20", "rnd_jsu_Fabian": "Officiis%20in%20ab%20vel%20quam%20veritatis.", "rnd_drf_Pasquale": "Necessitatibus%20veniam%20dolor%20deleniti%20totam.", "rnd_cix_Jimmy": "Ad%20atque%20nihil%20est%20molestiae%20voluptatem." }`,
    code: ` box.replaceSpaces = function (a) { return encodeURI(a) }`
  },
  squareRoot: {
    tests_json: ` { "test1": 2, "test2": 4, "test3": 1.5, "test4": 12, "test5": 10 }`,
    code: `box.squareRoot = function (x) { return Math.sqrt(x) }`
  },
  reverseString: {
    tests_json: `{ "empty": "", "test1": "tseb eht si tpircSavaJ", "test2": "yeknom yeknuf", "test3": ".latpoT evol eW", "rnd_hgb_Bradley": ".tse tnuicsen subitatpulov tse tu lihin tuA", "rnd_rww_Randal": ".tipicsus idommoc sitibed minE", "rnd_tal_Coy": ".tnus da omen iuq enoitar merolod lev aitilloM" }`,
    code: `box.reverseString = function (n) { return n.split("").reverse().join("") }`
  },
  arrayToObject: {
    tests_json: `{"test1":{"key":"value","numb":123,"bool":true},"test2":{"arr":[],"google":"8.8.8.8","obj":{"a":1}},"test3":[],"rnd_wmu_Summer":{"itaque":true,"nobis":true,"et":false,"vel":true,"quia":"Nihil non voluptatem vel nobis aliquid et.","autem":178,"deleniti":460},"rnd_cgm_Graciela":[],"rnd_uny_Weston":{"ipsa":-356,"nam":"Voluptates a maxime non quia deserunt.","unde":-333}}`,
    code: `box.arrayToObject=function(a){return 0<a.length?a.reduce((a,[b,c])=>!b?a:{...a,[b]:c},{}):a}`,

  },
  sortArrayDesc: {
    tests_json: `{ "test1": ["c", "b", "a"], "test2": ["zzz", "zz", "z"], "test3": ["ac", "ab", "aa"], "rnd_qfe_Mark": ["ut", "sit", "ratione", "quisquam", "occaecati", "modi", "modi", "et", "cum", "aspernatur"], "rnd_jkd_Jordane": ["ut", "porro", "nobis", "nobis", "ipsum", "incidunt", "in", "est", "dolorem", "a"], "rnd_xza_Torrance": ["suscipit", "saepe", "qui", "officia", "molestiae", "iste", "et", "est", "culpa", "atque"] }`,
    code: ` box.sortArrayDesc = function (a) { return a.sort((c, a) => a > c ? 1 : -1) };`
  },
  matchingType: {
    tests_json: `{ "test1": false, "test2": true, "test3": true, "test4": false, "rnd_jqd_Reinhold": false, "rnd_eli_Devyn": false, "rnd_whg_Eloisa": false }`,
    code: `box.matchingType = function (t, n) { return typeof t == typeof n };`
  },
  findAverage: {
    tests_json: `{ "test1": 3, "test2": 5, "test3": 18, "test4": 18, "rnd_mvx_Humberto": 331, "rnd_ned_Velda": 527, "rnd_uyq_Tiara": 810 }`,
    code: `box.findAverage = function (e) { return Math.ceil(e.reduce((e, n, t, c) => t === c.length - 1 ? (e + n) / c.length : e + n, 0)) };`
  },
  numberRepresentation: {

    tests_json: `{ "test1": 421, "test2": 51, "test3": 1, "test4": 0, "rnd_xgr_Aaron": 11, "rnd_raa_Rahul": 1111, "rnd_ors_Emanuel": 1221 }`,
    code: `box.numberRepresentation = function (t) { const n = [...new Set(t)].sort(); var e = n.reduce((n, e) => [...n, t.filter(n => n === e).length], []).join(""); return parseInt(e) || 0 };`
  },

  findUniqueNumber: {

    tests_json: `{ "test1": 1, "test2": 0, "test3": 77, "test4": 5, "rnd_cpu_Adaline": 82, "rnd_nws_Hellen": 13, "rnd_nnr_Josh": 14 }`,
    code: `box.findUniqueNumber = function (n) { return n.reduce((n, e, t, r) => { return [...r.slice(0, t), ...r.slice(t + 1)].some(n => n === e) ? n : [...n, e] }, [])[0] };`
  },
  numberOfCircles: {
    tests_json: ` { "test1": 2, "test2": 1, "test3": 5, "test4": 5, "rnd_dvp_Vanessa": 0, "rnd_ibz_Eula": 4, "rnd_hsl_Maude": 0 }`,
    code: ` box.numberOfCircles = function (a) { a = Math.abs(a); const b = [1, 0, 0, 0, 0, 0, 1, 0, 2, 1]; return a.toString().split("").map(a => b[parseInt(a)]).reduce((c, a) => c + a) }`,
  },
  monthToString: {

    tests_json: ` { "test1": "Jan", "test2": "Jul", "test3": "Dec", "test4": "May", "rnd_tav_Marcus": "Feb", "rnd_znx_Royce": "Jan", "rnd_dqd_Filomena": "Apr" }`,
    code: `box.monthToString = function (t) { const n = new Date(2e3, t - 1); return n.toLocaleString("default", { month: "short" }) };`
  },
  countUniqueNumbers: {
    tests_json: `{ "test1": 7, "test2": 5, "test3": 1, "test4": 0, "rnd_hra_Carmella": 5, "rnd_gck_Diego": 9, "rnd_krd_Lucile": 6 }`,
    code: `box.countUniqueNumbers = function (n) { return [...new Set(n)].length };`
  },
  reverseCase: {

    tests_json: `{ "test1": "rEVERSE ME!", "test2": "fLiP-fLoP", "test3": "bOEING 787", "test4": "UPSIDE-dOWn.", "rnd_bkp_Natalie": "noBIs qUI atqUE QuIdEm.", "rnd_zmd_Karolann": "eOS officia QUis Rerum ExeRcitAtIOnEM maxiME.", "rnd_vpw_Myron": "qUaSI MAioReS prOViDent doLoREM fuGa." }`,
    code: `box.reverseCase = function (a) { const b = { min: 65, max: 90 }, c = { min: 97, max: 122 }, d = a => a >= b.min && a <= b.max, e = a => a >= c.min && a <= c.max; return a.split("").reduce((a, b) => { const c = b.charCodeAt(0); return d(c) ? a + b.toLowerCase() : e(c) ? a + b.toUpperCase() : a + b }, "") }`
  },
  binaryToNumber: {
    tests_json: ` { "test1": 5, "test2": 37, "test3": 34, "test4": 84, "rnd_kal_Sid": 894, "rnd_gav_Van": 1000, "rnd_bku_Karina": 222 }`,
    code: `box.binaryToNumber = function (n) { return parseInt(n, 2) }`
  },
  charCountInString: {
    tests_json: `{ "test1": 6, "test2": 3, "test3": 0, "test4": 10, "rnd_ihg_Shyann": 4, "rnd_twu_Marietta": 3, "rnd_wyo_Gust": 6 }`,
    code: `box.charCountInString = function (e, n) { return n.split("").filter(n => n === e).length };`
  },
  twoArrayAvg: {
    tests_json: `{ "test1": 4, "test2": 5, "test3": 7, "test4": 5, "rnd_vum_Jovany": 54.345238095238095, "rnd_bbm_Gerald": 39.1875, "rnd_rkt_Jamaal": 52.111111111111114 }`,
    code: `box.twoArrayAvg = function (t, n) { var e = t => t.reduce((t, n, e, r) => (t += n, e === r.length - 1 ? t / r.length : t), 0); return (e(t) + e(n)) / 2 }`
  },
  reverseAllWords: {
    tests_json: `{ "test1": "esreveR lla sdrow dna ecnetnes", "test2": "meroL muspi", "test3": "eW evol SJ", "rnd_zlj_Juliet": "sumicuD ni tua tu .iuq", "rnd_tmg_Tracy": "siboN tema mue te .te", "rnd_sjp_Herman": "oidO otsui sitaicipsrep tis olli .te" }`,
    code: `box.reverseAllWords = function (a) { return a.split("").reverse().join("").split(" ").reverse().join(" ") };`
  },
  removeDuplicates: {
    tests_json: `{ "test1": "abcd", "test2": "helo", "test3": "trais", "test4": "hol", "test5": "helo wrd", "rnd_ykt_Terrence": "quaert osldnimbp.", "rnd_hpl_Noemy": "perfndis abumolvt.", "rnd_iwi_Edythe": "sapient omlxr." }`,
    code: `box.removeDuplicates = function (n) { return [...new Set(n.split(""))].join("") }; `
  },
  digitOccurrence: {
    tests_json: ` { "test1": 3, "test2": 21, "test3": 12, "test4": 20, "rnd_xnz_Chanel": 20, "rnd_ksr_Nicole": 17, "rnd_eut_Myrtie": 7 }`,
    code: `box.digitOccurrence = function (t, r) { return [...Array(t + 1)].reduce((n, t, e) => (e.toString().split("").forEach(t => { t === r.toString() && (n += 1) }), n), 0) };`
  },
  firstUniqueChar: {
    tests_json: ` { "test1": "c", "test2": "h", "test3": "r", "test4": false, "rnd_hrk_Jeramy": "q", "rnd_xsc_Clinton": "o", "rnd_xtl_Veronica": "e" }`,
    code: ` box.firstUniqueChar = function (t) { return t.split("").reduce((t, n, e, r) => { const o = [...r.slice(0, e), ...r.slice(e + 1)]; return o.some(t => t === n) || 0 !== t.length ? t : [n] }, []).join("") || !1 };`
  },
  missingInteger: {
    tests_json: ` { "test1": 4, "test2": 4, "test3": 4, "test4": 100, "test5": 1, "rnd_hqk_Darrion": 3, "rnd_kta_Vickie": 10, "rnd_lmi_Dina": 6 }`,
    code: `box.missingInteger = function (a) { if (0 === a.length) return 1; a.sort((c, a) => c - a); const b = a.findIndex(b => !a.some(a => (console.log({ secondEl: a, el: b }), a === b + 1))); return a[b] + 1 }; `
  },
  hexToRGB: {
    tests_json: `{ "test1": [255, 255, 255], "test2": [255, 0, 255], "test3": [2, 240, 188], "test4": [18, 52, 86], "rnd_wlt_Anahi": [9, 14, 163], "rnd_nmx_Flavio": [185, 5, 68], "rnd_eab_Christina": [243, 27, 33] }`,
    code: `box.hexToRGB = function (t) { var [, n, e, r, o, c, t] = t.split(""); return [parseInt(n + e, 16), parseInt(r + o, 16), parseInt(c + t, 16)] }`

  },
  isRotatedStr: {
    tests_json: `{ "test1": true, "test2": false, "test3": false, "test4": true, "rnd_mfo_Anastasia": false, "rnd_ymt_Jayme": false, "rnd_tmd_Jayde": false }`,
    code: `box.isRotatedStr = function (t, r) { return t === r || t.length === r.length && t.split("").some((t, n, e) => { return [...e.slice(n), ...e.slice(0, n)].join("") === r }) }`
  },
  averageAsciiChar: {
    tests_json: `{ "test1": "Z", "test2": "f", "test3": "Y", "test4": "T", "rnd_rmu_Kayden": "[", "rnd_tjn_Marina": "c", "rnd_kts_Ollie": "a" }`,
    code: `box.averageAsciiChar = function (e) { e = e.split("").reduce((e, n, r, t) => (e += n.charCodeAt(0), r === t.length - 1 ? e / t.length : e), 0); return String.fromCharCode(Math.round(e)) };`

  },
  findWord: {
    tests_json: `{ "test1": [5, 11], "test2": [0, 2], "test3": [6, 9], "test4": [0, 9], "test5": [], "rnd_lvl_Trisha": [27, 33], "rnd_dyc_Shannon": [19, 23], "rnd_mmn_Abigale": [36, 42] }`,
    code: `box.findWord = function (a, b) { const c = b.toLowerCase().search(a.toLowerCase()); return -1 < c ? [c, c + a.length - 1] : [] }; `
  },
  isAnagram: {
    tests_json: ` { "test1": false, "test2": true, "test3": true, "test4": false, "rnd_uhb_Russel": true, "rnd_gpu_Lavern": true, "rnd_dhu_Moses": true }`,
    code: `box.isAnagram = function (t, n) { return t.split("").sort().join("") === n.split("").sort().join("") }`
  },
  validateIP: {

    tests_json: `{ "test1": true, "test2": true, "test3": false, "test4": false, "test5": false, "test6": false, "test7": false, "test8": false, "test9": false, "rnd_ewk_Noe": true, "rnd_fda_Maribel": true, "rnd_gmf_Jody": false }`,
    code: ` box.validateIP = function (e) { const n = e.split("."); return 4 === n.length && n.every(e => (e => { const n = new RegExp("^[0-9]+$"); return n.test(e) })(e) && parseInt(e) < 256) };`


  },
  hashPassword: {
    tests_json: ` { "test1": "DE4eB", "test2": "EfG7", "test3": "R3vv0", "test4": "aVWAHS", "test5": "e5PE4a", "rnd_qvu_Tyson": "4wbpGj", "rnd_npr_Nadia": "ds6HkY", "rnd_ksd_Parker": "SiWlvs" }`,
    code: ` box.hashPassword = function (e, i) { var a = { min: 48, max: 57 }, u = { min: 65, max: 90 }, o = { min: 97, max: 122 }; return e.split("").map(e => { var n, r = e.charCodeAt(0); if (a.min <= (n = r) && n < a.max) return (parseInt(e) + i) % 10; if (u.min <= (e = r) && e <= u.max) { var t = (r + i - u.min) % 26; return String.fromCharCode(o.min + t) } if (o.min <= (t = r) && t <= o.max) { t = (r + i - o.min) % 26; return String.fromCharCode(u.min + t) } return String.fromCharCode(r + i) }).join("") };`


  },
  isPrime: {
    tests_json: `{ "test1": false, "test2": true, "test3": false, "test4": true, "rnd_tko_Jocelyn": false, "rnd_tap_Enos": false, "rnd_pxy_Joey": false }`,
    code: `box.isPrime = function (r) { if (r < 1) return !1; const e = [...Array(r)]; return !e.some((e, n) => { n += 1; return n < r && 1 < n && r % n == 0 }) }`
  },
  romanToInt: {


    tests_json: ` { "test1": 12, "test2": 55, "test3": 9, "test4": 49, "rnd_ozi_Nick": 997, "rnd_gpc_Benjamin": 359, "rnd_iuc_Katlynn": 414 }`,
    code: `box.romanToInt = function (e) { const m = [{ key: "I", value: 1 }, { key: "V", value: 5 }, { key: "X", value: 10 }, { key: "L", value: 50 }, { key: "C", value: 100 }, { key: "D", value: 500 }, { key: "M", value: 1e3 }]; return e.split("").reduce((e, n, r, t) => { var i = m.findIndex(e => e.key === n), a = m.findIndex(e => 0 < r && e.key === t[r - 1]), u = -1 === a, o = a + 1 <= i; return u || !u && !o ? e + m[i].value : !u && o ? e + m[i].value - 2 * m[a].value : e }, 0) };`

  },
  isPalindrome: {
    tests_json: `{ "test1": true, "test2": false, "test3": true, "test4": true, "test5": true, "rnd_vly_Ottilie": true, "rnd_oyz_Gretchen": true, "rnd_mdx_Oscar": true }`,
    code: `box.isPalindrome = function (e) { if ("string" == typeof e && "" === e) return !0; const n = e.toLowerCase().match(/[a-zA-Z]+/g).join(""); return n.split("").reverse().join("") === n };`

  },
  ticTacToeWinner: {

    tests_json: `{ "test1": "x", "test2": "error", "test3": "o", "test4": "x", "rnd_vqq_Cyril": "error", "rnd_eqz_Jan": "error", "rnd_eyx_Amely": "o" }`,
    code: `box.ticTacToeWinner = function (a) { const b = "o", c = (a, b) => b.some(b => b.every(b => b === a)), d = a => (console.log(a, "this is"), a.reduce((a, b, c, d) => { const e = d.map(a => a[c]); return [...a, e] }, [])), e = a => a.reduce((a, b, c, d) => { const [e = [], f = []] = a, g = d.length - 1 - c; return [[...e, d[c][c]], [...f, d[c][g]]] }, []), f = c("x", a) || c("x", d(a)) || c("x", e(a)), g = c(b, a) || c(b, d(a)) || c(b, e(a)); return f && g ? "error" : f ? "x" : g ? b : "draw" }; `
  },

}







