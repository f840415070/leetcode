/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hashMap = {};
  let numsLen = nums.length;
  for (let i = 0; i < numsLen; i++) {
    if (nums[i] in hashMap) {
      return [hashMap[nums[i]], i];
    }
    hashMap[target - nums[i]] = i;
  }
  return [];
};
// @lc code=end

