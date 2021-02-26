/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return '1';
  }
  let result = countAndSay(n - 1);
  let pointer = 0;
  let s = '';
  for (let i = 0; i < result.length; i += 1) {
    if (result[pointer] !== result[i]) {
      s += (i - pointer) + result[pointer];
      pointer = i;
    }
  }
  return s + (result.length - pointer) + result[pointer];
};
// @lc code=end

