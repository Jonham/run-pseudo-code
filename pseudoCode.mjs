/** 获取伪代码字符串
 * @date 2019-09-26
 * @export
 * @returns {string}
 */
export function getPseudoCode() {
// Pseudocode.js on http://www.tatetian.io/pseudocode.js/
  // const pseudoCode = document.querySelector('.ps-block').innerText
  const pseudoCode = `1:procedure Quicksort(a,p,r)

2:if p<r then

3:q= Partition(a,p,r)

4:Quicksort(a,p,q−1)

5:Quicksort(a,q+1,r)

6:end if

7:end procedure

8:procedure Partition(a,p,r)

9:x=a[r]

10:i=p−1

11:for j=p to r−1 do

12:if a[j]<x then

13:i=i+1

14:exchange a[i] with a[j]

15:end if

16:exchange a[i] with a[r]

17:end for

18:end procedure`

  return pseudoCode
}
/** 获取伪代码
 * @date 2019-09-26
 * @export
 * @returns {string[]}
 */
export function GetRawPCode() {
  return getPseudoCode().split('\n').filter(Boolean).map(i => i.split(':')[1])
}