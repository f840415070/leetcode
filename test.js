
var canPartition = function(nums) {
  const { length } = nums;
  if (length < 2) {
    return false;
  }
  const sum = nums.reduce((s, n) => s + n);
  const target = sum / 2;
  if (sum % 2 !== 0) {
    return false;
  }

  const dp = new Array(length).fill(
    new Array(target + 1).fill(false)
  );
  for (let i = 0; i < length; i++) {
    dp[i][0] = true;
  }
  dp[0][nums[0]] = true;
  for (let i = 1; i < length; i++) {
    for (let j = 1; j <= target; j++) {
      if (nums[i] <= j) {
        if (i === 1 && j === 4) {
          console.log(dp[i][j], dp[0][4])
        }
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
        if (i === 1 && j === 4) {
          console.log(dp[i][j], dp[0][4])
        }
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[length - 1][target];
};

canPartition([2, 2, 3, 5]);
