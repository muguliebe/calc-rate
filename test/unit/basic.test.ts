import * as calc from '../../src'

describe('calc Basic', () => {
    it('normal', () => {
        expect(calc.sum(1, 1)).toEqual(2)
        expect(calc.minus(1, 1)).toEqual(0)
    })
})
