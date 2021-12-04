const { sum } = require('./src/basic')

function calc() {}

calc.sum = sum // 더하기

module.exports = calc
