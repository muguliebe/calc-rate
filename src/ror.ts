import Decimal from "decimal.js";

/**
 * 수익률 계산
 * @param prcStart 시작가
 * @param prcCurrent 현재가
 * @param amount 진입 개수
 * @param feeBuy 매수 수수료%
 * @param feeSell 매도 수수료%
 * @param tax 세금%
 */
export const ror = (prcStart: number, prcCurrent: number, amount: number
    , feeBuy: number=0, feeSell: number=0, tax:number=0): number => {

    /*
        진입 총액 =  매수 주식수 * 시점 주가
        현재 총액 = 매수 주식수 * 현재 주가
        수익률 = (현재 총액 - 진입 총액)/ 진입 총액
        수익금 = 수익률 * 진입 총액
        => 실질 수익금 = 수익금 - ( 매수 수수료 + 매도 수수료 + 세금)
        매수 수수료 = 진입가 * 매수 수수료율
        매도 수수료 = (진입 총액 + 수익금) * 매도 수수료율
     */
    const totEnter = new Decimal(amount).mul(prcStart)
    const totCurrent = new Decimal(amount).mul(prcCurrent)
    const pnlRate = new Decimal(totCurrent).sub(totEnter).dividedBy(totEnter)
    const pnlPrc = new Decimal(pnlRate).mul(totEnter)
    const pnlReal = new Decimal(pnlPrc)
        .sub(
            new Decimal(totEnter).mul(feeBuy).dividedBy(100)
                .add(
                    new Decimal(totEnter).add(pnlPrc).mul(feeBuy).dividedBy(100)
                )
                .add(
                    new Decimal(totEnter).add(pnlPrc).mul(tax).dividedBy(100)
                )
        )

    return Number(pnlReal.toFixed(2))
}
