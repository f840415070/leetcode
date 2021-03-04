/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const dp = [triangle[0]];
  for (let i = 1; i < triangle.length; i++) {
    dp[i] = [];
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + triangle[i][j],
        dp[i - 1][j - 1] + triangle[i][j],
      );
    }
  }
  return dp[triangle.length - 1][triangle[0].length - 1];
};
// @lc code=end

