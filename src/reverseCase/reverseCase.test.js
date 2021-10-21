import { reverseCase } from './reverseCase'

const testData = [
  {
    value: "Reverse me!", expected: "rEVERSE ME!"
  },
  {
    value: "FlIp-FlOp", expected: "fLiP-fLoP"
  },
  {
    value: "Boeing 787", expected: "bOEING 787"
  },
  {
    value: "upside-DowN.", expected: "UPSIDE-dOWn."
  },
  { value: "DIgnissiMoS SED EXcEptuRI VoluPtateM qUIBUSdaM.", expected: "diGNISSImOs sed exCePTUri vOLUpTATEm QuibusDAm." },

  {
    value: "VolUptaTem INcidunT aRchITECtO nAm nUlla quia UT POssiMUs iPSum.", expected: "vOLuPTAtEM inCIDUNt ArCHitecTo NaM NuLLA QUIA ut poSSImuS IpsUM."
  },
  { value: "OPTiO est enIM qUia MAgNI dOloRiBuS nISi facerE.", expected: "optIo EST ENim QuIA maGni DoLOrIbUs NisI FACERe." },]

test.each(testData)('test is numberOf reverseCase', ({ value, expected }) => {
  console.log({
    value, recieived: reverseCase(value), expected
  })
  expect(reverseCase(value)).toBe(expected)
})

