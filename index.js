const BeautifyJS = require('js-beautify').js

const { GetRawPCode } = require('./src/pseudoCode.js')
const { TranslatePCode } = require('./src/translate.js')
const { RunJS } = require('./src/runCode.js')

const rawCodeLines = GetRawPCode()
const codes = TranslatePCode(rawCodeLines).join('\n')

console.log('after BeautifyJS ::\n')
console.log(BeautifyJS(codes))

console.log('\nresult:')
console.log('>', RunJS(codes, 'Quicksort'))
