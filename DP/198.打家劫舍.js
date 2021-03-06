/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  const dp = [];
  for (let i = 0; i < nums.length; i++) {
    dp[i] = Math.max(
      nums[i] + (dp[i - 2] || 0), // 偷当前房子
      dp[i - 1] || 0, // 不偷当前房子，偷下一个房子
    );
  }
  return dp[nums.length - 1];
};
// @lc code=end

