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
  const sum = nums.reduce((s, n) => s + n);
  const target = sum / 2;
  if (target % 2 !== 0) {
    return false;
  }

  const dp = new Array(length).fill(
    new Array(target + 1).fill(false)
  );
  

};
// @lc code=end

