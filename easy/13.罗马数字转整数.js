/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0;
  const subedStr = s
    .replace('IV', 'IIII')
    .replace('IX', 'VIIII')
    .replace('XL', 'XXXX')
    .replace('XC', 'LXXXX')
    .replace('CD', 'CCCC')
    .replace('CM', 'DCCCC');
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
  for (let char of subedStr) {
    result += romanMap[char];
  }
  return result;
};
// @lc code=end

