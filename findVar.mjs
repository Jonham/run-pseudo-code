export function findVar(codeRows = []) {
  return codeRows.map((row) => {
    let vars = []

    const m = row.match(/([0-9a-zA-Z_$]+) ?=/)
    if (m) {
      vars.push(m[1])
    }

    // 函数入参
    const params = row.match(/function \w+\((.+)\)/)
    if (params) {
      const p = params[1]
      const l = p.split(',')
      vars = vars.concat(l)
    }

    return vars
  })
}
// const vars = findVar(codes.split('\n'))
// add let/const
// addLetConst(codes.split('\n'), vars)

// function addLetConst(codes, vars) {
//   codes.map((row, rowNum) => {
//     let rowVars = vars.slice(0, rowNum - 1).reduce((s, item) => { return s.concat(item)}, [])
//     if (rowNum == 0) rowVars = []
//     // console.log('rowVars ', rowVars)
//     const m = row.match(/(\w+) ?\=/)
//     if (m) {
//       console.log(m)
//     }
//   })
// }
