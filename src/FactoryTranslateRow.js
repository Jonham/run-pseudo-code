/**
 * @date 2019-09-26
 * @param {*} [mapDict=[]]
 * @returns {function} replace keywords
 */
function FactoryTranslateRow(mapDict = []) {
  return codeLine => {
    mapDict.forEach(rule => {
      codeLine = codeLine.replace(rule.from, rule.to)
    })
    return codeLine
  }
}

exports.FactoryTranslateRow = FactoryTranslateRow
