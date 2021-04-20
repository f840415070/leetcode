
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

  const dp = new Array(length).fill(new Array(target + 1).fill(false));
  const dp = new Array(length).fill(0).map(v => new Array(target + 1).fill(false));

  for (let i = 0; i < length; i++) {
    dp[i][0] = true;
  }
  dp[0][nums[0]] = true;

  for (let i = 1; i < length; i++) {
    for (let j = 1; j <= target; j++) {
      if (nums[i] <= j) {
        i === 1 && j === 4 && console.log(dp[0][4]);
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
        i === 1 && j === 4 && console.log(dp[0][4]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[length - 1][target];
};
console.log(canPartition([2, 2, 3, 5]));

var canPartition2 = function(nums) {
  const n = nums.length;
  if (n < 2) {
      return false;
  }
  let sum = 0, maxNum = 0;
  for (const num of nums) {
      sum += num;
      maxNum = maxNum > num ? maxNum : num;
  }
  if (sum & 1) {
      return false;
  }
  const target = Math.floor(sum / 2);
  if (maxNum > target) {
      return false;
  }
  const dp = new Array(n).fill(0).map(v => new Array(target + 1).fill(false));
  for (let i = 0; i < n; i++) {
      dp[i][0] = true;
  }
  dp[0][nums[0]] = true;

  for (let i = 1; i < n; i++) {
      const num = nums[i];
      for (let j = 1; j <= target; j++) {
          if (j >= num) {
              dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
          } else {
              dp[i][j] = dp[i - 1][j];
          }
      }
  }
  return dp[n - 1][target];
};
// console.log(canPartition2([2, 2, 3, 5]));
