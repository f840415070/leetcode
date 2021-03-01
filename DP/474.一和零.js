/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const count_0_1 = (str) => {
    let c0 = 0;
    let c1 = 0;
    for (let i = 0; i < str.length; i++) {
      str[i] === '0' ? c0++ : c1++;
    }
    return [c0, c1];
  };
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      dp[i][j] = [];
      for (let k = 0; k < strs.length; k++) {
        const [c0, c1] = count_0_1(strs[k]);
        dp[i][j][k] = Math.max(
          dp[i][j][k - 1] || 0,
          i >= c0 && j >= c1
            ? 1 + (dp[i - c0][j - c1][k - 1] || 0)
            : 0
        );
      }
    }
  }
  return dp[m][n][strs.length - 1];
};
// @lc code=end

