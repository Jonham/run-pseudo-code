export function RunJS(fnStr, fnName = false, params = []) {
  if (fnName === false) {
    const m = fnStr.match(/function (.+)\(/)
    if (m) fnName = m[1]
  }

  // console.log(fnStr)
  try {
    var result = {}
    var ResultKey = 'preset'
    var resultKey = 'ResultKey'

    eval(fnStr +
      `result[${resultKey}] = ${fnName}(...params)`)
    return result[resultKey] || 'Error: { "msg": "your function may have no return" }'
  } catch (err) {
    console.log(err)
  }
}

// function run(codes) {
//   var result = 'preset'
//   var fnName = 'Quicksort'
//   eval(codes + `
//   result = [1,2,7,3,5,9];

//   console.log('')
//   console.log('> original list: ', JSON.stringify(result))
//   ${fnName}(result, 0, result.length - 1)
//   `)

//   return result
// }