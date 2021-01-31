/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const [MIN, MAX] = [-2147483648, 2147483647];
  let revertedNum = 0;
  let isPositive = x > 0;
  while (x) {
    revertedNum = revertedNum * 10 + x % 10;
    if (revertedNum < MIN || revertedNum > MAX) {
      return 0;
    }
    x = isPositive ? Math.floor(x / 10) : Math.ceil(x / 10);
  }
  return revertedNum;
};
// @lc code=end

