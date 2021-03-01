/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 2) {
    return Math.max(...nums);
  } else {
    return Math.max(
      robI(nums.slice(1)),
      robI(nums.slice(0, -1)),
    );
  }
};
var robI = function(nums) {
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

