/**
 * @date 2019-09-26
 * @param {*} [mapDict=[]]
 * @returns {function} replace keywords
 */
export function FactoryTranslateRow(mapDict = []) {
  return codeLine => {
    mapDict.forEach(rule => {
      codeLine = codeLine.replace(rule.from, rule.to)
    })
    return codeLine
  }
}
