/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const cl = cost.length;
  if (cl < 3) {
    return Math.min(...cost);
  }
  const dp = [cost[0], cost[1]];
  for (let i = 2; i < cl; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  return Math.min(dp[cl - 1], dp[cl - 2]);
};
// @lc code=end

