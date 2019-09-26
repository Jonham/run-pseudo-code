import { GETuniqueVarName } from './getUniqueVarName.mjs'
/**
 * @typedef {object} KeywordTranslatePair
 * @property {RegExp} from
 * @property {function|string} to
 */

/** @type {KeywordTranslatePair[]} 代码替换规则 */
export const TranslateWordsMap = [
  { // 异常的 -
    from: /\−/gm,
    to: '-',
  },
  { // 异常的 -
    from: /^(\s+)?(\w+) ?=(.+)$/,
    to: (full, v1, varName, exp) => {
      // console.log('match full >> ', full)
      // 如果右边表达式，有左边变量名，则不加let
      // TODO: 需要加语法树分析
      if (exp.match(new RegExp(varName))) return full
      return `let ${varName} = ${exp} \t// add let`
    },
  },
  { // end procedure => }
    from: /end procedure/g,
    to: '}'
  },
  { // procedure Quicksort(a,p,r) => function Quicksort(a,p,r) {
    from: /procedure (.+)$/g,
    to: (_, params) => `function ${params} {`
  },
  // if
  { // if XXX then => if (XXX) {
    from: /if (.+?) then/g,
    to: (_, cond) => `if (${cond}) {`
  },
  { // end if => }
    from: /end if/g,
    to: '}'
  },
  // for
  { // for (.+?) do
    from: /for (.+?) do/g,
    to: (_, cond) => `for (${cond}) {`
  },
  { // end for => }
    from: /end for/g,
    to: '}'
  },
  { // 支持单变量
    from: /for \((.+) to (.+)\) {/,
    to: (_, v1, v2) => {
      // console.log('v1', v1)
      const vname = v1.match(/(.+)=(.+)/)
      if (!vname) throw new Error('vname为空，for支持单变量出现错误')

      return `for (let ${v1};${vname[1]} < ${v2};${vname[1]}++) {`
    }
  },

  // exchange
  { // exchange (.+?) with (.+?)
    from: /exchange (.+?) with (.+?)$/g,
    to: (_, valueA, valueB) => {
      const tempKey = GETuniqueVarName()
      return `let ${tempKey} = ${valueB};${valueB} = ${valueA};${valueA} = ${tempKey};`
    }
  },
]
