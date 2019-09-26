const { FactoryTranslateRow } = require('./FactoryTranslateRow.js')
const { TranslateWordsMap } = require('./translateWords.js')

/** 转译伪代码
 * @date 2019-09-26
 * @param {string[]} rawCodeLines
 */
function TranslatePCode(rawCodeLines) {
  const translateLine = FactoryTranslateRow(TranslateWordsMap)
  return rawCodeLines.map(line => translateLine(line))
}

exports.TranslatePCode = TranslatePCode
