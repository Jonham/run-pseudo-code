import { getPseudoCode } from './pseudoCode.mjs'

const pseudoCode = getPseudoCode()
let varCount = 0
let varPrefix = '$_jt_'
if (pseudoCode.match(new RegExp(varPrefix), 'gm')) varPrefix + Date.now()

/** 获取代码中唯一变量名
 * @date 2019-09-26
 * @export
 * @returns {string}
 */
export function GETuniqueVarName() {
  return varPrefix + varCount++
}
