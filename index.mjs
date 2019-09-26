import jsBeautify from 'js-beautify'
const BeautifyJS = jsBeautify.js

import { GetRawPCode } from './pseudoCode.mjs'
import { TranslatePCode } from './translate.mjs'
import { RunJS } from './runCode.mjs'

const rawCodeLines = GetRawPCode()
const codes = TranslatePCode(rawCodeLines).join('\n')

console.log('after BeautifyJS ::\n')
console.log(BeautifyJS(codes))

console.log('\nresult:')
console.log('>', RunJS(codes, 'Quicksort'))
