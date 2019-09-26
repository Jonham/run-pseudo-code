const BeautifyJS = require('js-beautify').js

const { ParseRawText } = require('./src/pseudoCode.js')
const { TranslatePCode } = require('./src/translate.js')
const { RunJS } = require('./src/runCode.js')

function ParsePseudoCode(rawText, isBeautify = false) {
  const rawCodeLines = ParseRawText(rawText)
  const codes = TranslatePCode(rawCodeLines).join('\n')

  return isBeautify ? BeautifyJS(codes) : codes
}
exports.ParsePseudoCode = ParsePseudoCode

exports.RunPseudoCode = function RunPseudoCode(rawText) {
  const codes = ParsePseudoCode(rawText)
  return RunJS(codes)
}
exports.RunJS = RunJS

function exportToWindow(dict, global = {}) {
  Object.keys(dict).forEach(key => {
    global[key] = dict[key]
  })
}

exportToWindow(exports, global)
