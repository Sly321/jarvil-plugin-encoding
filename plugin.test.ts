import { JarvilTestUtils } from "jarvil-plugin-tools"
import DecodeEncodePlugin from "."


describe(`plugin`, () => {
  describe(`valid`, () => {
    it(`should be a valid plugin`, () => {
      expect(JarvilTestUtils.validate(DecodeEncodePlugin)).toBe(true)
    })
  })
})