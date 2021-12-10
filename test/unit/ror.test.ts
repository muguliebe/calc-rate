import * as calc from '../../src'

describe('ror', () => {
    it('normal', () => {
        expect(calc.ror(1000, 2000, 0.5)).toEqual(500)
    })
})
