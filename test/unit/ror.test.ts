import * as calc from '../../src'

describe('ror', () => {
    it('normal', () => {
        // 1000 달러 시작, 2000달러 종료, 0.5개면 => 500 달러 이익
        expect(calc.ror(1000, 2000, 0.5)).toEqual(500)
    })
})
