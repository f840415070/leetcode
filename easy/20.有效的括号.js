/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const stack = [];
  for (let aChar of s) {
    switch (aChar) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (stack.pop() !== aChar) {
          return false;
        }
    }
  }
  return stack.length === 0;
};
// @lc code=end

