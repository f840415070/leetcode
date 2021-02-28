/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const maxList = [nums[0]];
  const minList = [nums[0]];
  const { max, min } = Math;
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      maxList[i] = max(nums[i], maxList[i - 1] * nums[i]);
      minList[i] = min(nums[i], minList[i - 1] * nums[i]);
    } else {
      maxList[i] = max(nums[i], minList[i - 1] * nums[i]);
      minList[i] = min(nums[i], maxList[i - 1] * nums[i]);
    }
    result = max(result, maxList[i]);
  }
  return result;
};
// @lc code=end

