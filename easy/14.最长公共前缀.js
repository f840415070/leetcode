/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  return strs.reduce((pre, cur) => {
    let i = 0;
    while (pre[i] && cur[i] && pre[i] === cur[i]) {
      i += 1;
    }
    return pre.slice(0, i);
  });
};
// @lc code=end

/**
  if (strs.length === 0) {
    return '';
  }
  let result = '';
  let shortestLen = strs[0].length;
  let shortestStr = strs[0];
  strs.forEach(aStr => {
    if (aStr.length < shortestLen) {
      shortestLen = aStr.length;
      shortestStr = aStr;
    }
  });
  let i = 0;
  while (i < shortestLen) {
    for (let aStr of strs) {
      if (shortestStr[i] !== aStr[i]) {
        return result;
      }
    }
    result += shortestStr[i];
    i += 1;
  }
  return result;
 */