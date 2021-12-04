const calc = require('../../dist')

describe('calc Basic', () => {
    it('sum result', () => {
        const result = calc.sum(1,1)
        expect(result).toEqual(2)
    })
})
