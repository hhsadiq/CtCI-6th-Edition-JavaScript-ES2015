/**
 *
 * @param N
 * @returns {*}
 */
export function solution(N) {
  for (let i = N; i >= 1; i--) {
    if (isTidy(i)) {
      return i;
    }
  }
}

/**
 *
 * @param N
 * @returns {*}
 */
export function isTidy(N) {
  const numArray = N.toString().split('');
  if (parseInt(numArray[numArray.length - 1]) === 0) return false;
  return numArray.every((num, i, arr) => {
    if (i + 1 === arr.length) return true;
    return parseInt(num) <= parseInt(arr[i + 1]);
  });
}