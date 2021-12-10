import * as calc from '../../src'

describe('rate', () => {
    it('normal', () => {
        expect(calc.percentPart(3, 100)).toEqual(3)
        expect(calc.percentOfTot(100, 30)).toEqual(30)
        expect(calc.percentAdd(100, 30)).toEqual(130)
        expect(calc.percentSub(100, 30)).toEqual(70)
    })
})
