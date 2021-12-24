import * as calc from '../../src'

describe('rate', () => {
    it('part', () => {
        expect(calc.percentPart(3, 100)).toEqual(3)
    })
    it('percentOfTot', () => {
        expect(calc.percentOfTot(100, 30)).toEqual(30)
        expect(calc.percentOfTot(100, 5)).toEqual(5)
        expect(calc.percentOfTot(100, -5)).toEqual(-5)
    })
    it('percentOfTotWithEA', () => {
        expect(calc.percentOfTotWithEA(100, 1, 5)).toEqual(105)
        expect(calc.percentOfTotWithEA(100, 2, 5)).toEqual(110)
        expect(calc.percentOfTotWithEA(100, 3, 5)).toEqual(115)
        expect(calc.percentOfTotWithEA(100, 1, 10)).toEqual(110)
        expect(calc.percentOfTotWithEA(100, 2, 10)).toEqual(120)
    })
    it('percentAdd', () => {
        expect(calc.percentAdd(100, 30)).toEqual(130)
    })
    it('percentSub', () => {
        expect(calc.percentSub(100, 30)).toEqual(70)
        expect(calc.percentSub(100, 90)).toEqual(10)
    })
    it('percentOfChange', () => {
        const result1 = calc.percentOfChange(100, 110)
        expect(result1).toEqual(10)

        const result2 = calc.percentOfChange(100, 90)
        expect(result2).toEqual(-10)

        const result3 = calc.percentOfChange(10000, 887.5)
        console.log(`percentOfChange: 10000 -> 887.5 is ${result3}`)
        expect(result3).toEqual(-91.13)


    })
})
