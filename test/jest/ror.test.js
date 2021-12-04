const calc = require('../../dist')

describe('ror', () => {
    it('normal', () => {
        expect(calc.ror(1000, 2000, 0.5)).toEqual(500)
    })
})
