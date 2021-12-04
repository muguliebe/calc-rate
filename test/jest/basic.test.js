const calc = require('../../index')

describe('calc Basic', () => {
    it('sum result', () => {
        expect(calc.sum(1, 1)).toEqual(2)
    })
})
