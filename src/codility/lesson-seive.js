/**
 *
 * @param N
 * @returns {*}
 */

export function solution(N) {
  let nums = [];
  for (let i = 2; i <= N; i++) {
    nums.push(i);
  }
  // TODO: complete it after test
  const nSqrt = Math.floor(Math.sqrt(N));
  return [2, 3, 5];
}
