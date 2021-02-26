/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  const result = [];
  for (let i = 0; i < n + 1; i += 1) {
    if (i <= 1) {
      result[i] = i;
    } else {
      result[i] = result[i - 1] + result[i - 2];
    }
  }
  return result[n];
};
// @lc code=end

