import { hashPassword } from "./hashPassword";

//hashPassword("ab1By", 3) = undefinedexpected: "DE4eB"
test('undefinedexpected: "DE4eB"', () => {
  expect(hashPassword("ab1By", 3)).toBe("DE4eB");
});

//hashPassword("aBc3", 4) = undefinedexpected: "EfG7"
test('undefinedexpected: "EfG7"', () => {
  expect(hashPassword("aBc3", 4)).toBe("EfG7");
});

//hashPassword( "h3LL0",10 ) = undefinedexpected: "R3vv0"
test('undefinedexpected: "R3vv0"', () => {
  expect(hashPassword("h3LL0", 10)).toBe("R3vv0");
});


//hashPassword("Toptal", 7) = undefinedexpected: "aVWAHS"
test('undefinedexpected: "aVWAHS"', () => {
  expect(hashPassword("Toptal", 7)).toBe("aVWAHS");
});


//hashPassword("H4sh3D", 101) = undefinedexpected: "e5PE4a"
test('undefinedexpected: "e5PE4a"', () => {
  expect(hashPassword("H4sh3D", 101)).toBe("e5PE4a");
});

//hashPassword("uRo6OO", 9) = undefinedexpected: "DaX5xx"
test('undefinedexpected: "DaX5xx"', () => {
  expect(hashPassword("uRo6OO", 9)).toBe("DaX5xx");
});

//hashPassword("OSyNCb", 7) = undefinedexpected: "vzFujI"
test(' undefinedexpected: "vzFujI"', () => {
  expect(hashPassword("OSyNCb", 7)).toBe("vzFujI");
});

//hashPassword("2fhPhL", 7) = undefinedexpected: "9MOwOs"
test('undefinedexpected: "9MOwOs"', () => {
  expect(hashPassword("2fhPhL", 7)).toBe("9MOwOs");
});

/*








hashPassword( "H4sh3D",101 ) = undefinedexpected: "e5PE4a"
test('undefinedexpected: "aVWAHS"', () => {
  expect(hashPassword("Toptal", 7)).toBe("aVWAHS");
});

hashPassword( "uRo6OO",9 ) = undefinedexpected: "DaX5xx"
test('undefinedexpected: "aVWAHS"', () => {
  expect(hashPassword("Toptal", 7)).toBe("aVWAHS");
});

hashPassword( "OSyNCb",7 ) = undefinedexpected: "vzFujI"
test('undefinedexpected: "aVWAHS"', () => {
  expect(hashPassword("Toptal", 7)).toBe("aVWAHS");
});

hashPassword( "2fhPhL",7 ) = undefinedexpected: "9MOwOs"
test('undefinedexpected: "aVWAHS"', () => {
  expect(hashPassword("Toptal", 7)).toBe("aVWAHS");
});
 */