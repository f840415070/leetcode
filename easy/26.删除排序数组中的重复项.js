/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[x] !== nums[i]) {
      nums[++x] = nums[i];
    }
  } 
  return ++x;
};
// @lc code=end

