/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const { length } = nums;
  if (length < 2) {
    return false;
  }
  let sum = 0;
  let max = nums[0];
  for (let i = 0; i < length; i++) {
    sum += nums[i];
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  if (sum % 2 !== 0) {
    return false;
  }
  const target = sum / 2;
  if (max > target) {
    return false;
  }

  const dp = Array(length).fill(Array(target + 1));
  for (let i = 0; i < length; i++) {
    dp[i][0] = true;
  }
  dp[0][nums[0]] = true;
  for (let i = 1; i < length; i++) {
    for (let j = 1; j <= target; j++) {
      if (nums[i] <= j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[length - 1][target];
};
// @lc code=end

