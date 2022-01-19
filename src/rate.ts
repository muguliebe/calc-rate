import Decimal from "decimal.js";

/**
 * 각종 률 구하기
 */

/**
 * part 값은 tot 값에서 몇 퍼센트 인가
 * 일부값 ÷ 전체값 X 100
 * ex) 3은 10의 몇 퍼센트?
 *     perCentPart(10, 3) = 30
 * @param tot
 * @param part
 * @param fixed
 */
export const percentPart = (part: number|Decimal, tot: number|Decimal, fixed: number = 2): number => {
    const result = new Decimal(part).dividedBy(tot)
        .mul(100)
        .toFixed(fixed)

    return Number(result)
}

/**
 * 특정 값의 'x 퍼센트는' 얼마
 * 전체값 X 퍼센트 ÷ 100
 * ex) 100 의 3 퍼센트?
 *     percentOfTot(100, 3) = 3
 * @param tot
 * @param percent
 * @param fixed
 */
export const percentOfTot = (tot: number, percent: number, fixed: number = 2): number => {
    const result = new Decimal(tot)
        .mul(percent)
        .dividedBy(100)
        .toFixed(fixed)

    return Number(result)
}

/**
 * A 값으로 B 갯수를 갖고 있는 상황에서 C 퍼센트면 얼마?
 * 전체값 X 퍼센트 ÷ 100 * 개수
 * ex) 100 가격에 3개 갖고 있다면 5퍼센트 수익은?
 *     percentOfTot(100, 3, 5) = 115
 */
export const percentOfTotWithEA = (tot: number, ea:number, percent: number, fixed: number = 2): number => {
    const ret= new Decimal(tot)
        .mul(percent)
        .dividedBy(100)
        .mul(ea)
        .toFixed(fixed)

    const result = new Decimal(tot).add(ret)

    return Number(result)
}


/**
 * 퍼센트 증가
 * 숫자 X (1 + 퍼센트 ÷ 100)
 * ex) 100 에서 30 퍼센트 늘어나면?
 *     100 * 1.3
 *     percentAdd(100, 30) = 130
 * @param start
 * @param percent
 */
export const percentAdd = (start: number, percent: number): number => {
    const result = new Decimal(percent)
        .dividedBy(100)
        .add(1)
        .mul(start)
        .toFixed(2)

    return Number(result)
}
/**
 * 퍼센트 감소
 * 숫자 X (1 - 퍼센트 ÷ 100)
 * ex) 100 에서 30 퍼센트 감소하면?
 *     100 * 0.7
 *     percentAdd(100, 30) = 70
 * @param start
 * @param percent
 */
export const percentSub = (start: number, percent: number): number => {
    const result =
        new Decimal(1)
            .sub(new Decimal(percent)
                .dividedBy(100)
            )
            .mul(start)
            .toFixed(2)

    return Number(result)
}

/**
 * 증감률 구하기
 */
export const percentOfChange = (start: number, end: number): number => {
    const result = new Decimal(end)
        .sub(start)
        .dividedBy(start)
        .mul(100)
        .toFixed(2)

    return Number(result)
}



