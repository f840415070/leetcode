/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let n = 0;
  let l = nums.length - 1;
  while (n <= l) {
    const mid = Math.floor((n + l) / 2);
    if (nums[mid] < target) {
      n = mid + 1;
    } else {
      if (nums[mid] === target && nums[mid !== target]) {
        return mid;
      } else {
        l = mid -1;
      }
    }
  }
  return n;
};
// @lc code=end

