/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) {
    return 0;
  }
  const nLen = needle.length;
  const hLen = haystack.length;
  for (let i = 0; i <= hLen - nLen; i++) {
    for (let j = 0; j < nLen; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
      if (j == nLen - 1) {
        return i;
      }
    }
  }
  return -1;
};
// @lc code=end

