/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const { length } = s;
  const dp = Array(length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j <= length; j++) {
      if (dp[i] && wordDict.includes(s.slice(i, j))) {
        dp[j] = true;
      }
    }
  }
  return dp[length];
};
// @lc code=end

