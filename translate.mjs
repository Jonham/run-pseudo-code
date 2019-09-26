import { FactoryTranslateRow } from './FactoryTranslateRow.mjs'
import { TranslateWordsMap } from './translateWords.mjs'

/** 转译伪代码
 * @date 2019-09-26
 * @param {string[]} rawCodeLines
 */
export function TranslatePCode(rawCodeLines) {
  const translateLine = FactoryTranslateRow(TranslateWordsMap)
  return rawCodeLines.map(line => translateLine(line))
}
