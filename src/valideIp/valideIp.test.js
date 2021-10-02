import { validateIP } from './valideIp'
const ips = [
  { ip: "192.168.0.1", expected: true },
  { ip: "0.0.0.0", expected: true },
  { ip: "192.168.0.1", expected: true },
  { ip: "1.2.3.4.5", expected: false },
  { ip: "1..23.4", expected: false },
  { ip: "123.256.34.56", expected: false },
  { ip: ".254.255.0", expected: false },
  { ip: "1.2.3.0x1", expected: false },
  { ip: "12.25.32.ip", expected: false },
  { ip: "212.6n.195.150", expected: false },
  { ip: "250.60.169.114", expected: true },
  { ip: "174.29.108.120", expected: true },
]

test.each(ips)('test ip', ({ ip, expected }) => {

  expect(validateIP(ip)).toBe(expected);
})

/*
validateIP( "192.168.0.1" ) = undefinedexpected: true

validateIP( "0.0.0.0" ) = undefinedexpected: true

validateIP( "192.168.0.1" ) = undefinedexpected: true

validateIP( "1.2.3.4.5" ) = undefinedexpected: false

validateIP( "1..23.4" ) = undefinedexpected: false

validateIP( "123.256.34.56" ) = undefinedexpected: false

validateIP( ".254.255.0" ) = undefinedexpected: false

validateIP( "1.2.3.0x1" ) = undefinedexpected: false

validateIP( "12.25.32.ip" ) = undefinedexpected: false

validateIP( "212.6n.195.150" ) = undefinedexpected: false

validateIP( "250.60.169.114" ) = undefinedexpected: true

validateIP( "174.29.108.120" ) = undefinedexpected: true
 */
