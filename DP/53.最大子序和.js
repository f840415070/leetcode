/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let len = nums.length;
  const dp = [];
  dp[len - 1] = nums[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    dp[i] = Math.max(
      nums[i],
      dp[i + 1] + nums[i],
    );
  }
  return Math.max(...dp);
  // const dp = [nums[0]];
  // let maxSum = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  //   if (dp[i] > maxSum) {
  //     maxSum = dp[i];
  //   }
  // }
  // return maxSum;
};
// @lc code=end

