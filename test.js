const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];

var minimumTotal = function(triangle) {
  const dp = [triangle[0]];
  for (let i = 1; i < triangle.length; i++) {
    dp[i] = [];
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + triangle[i][j],
        dp[i - 1][j - 1] + triangle[i][j],
      );
    }
  }
  console.log(dp)
  return dp[triangle.length - 1][triangle[0].length - 1];
};

minimumTotal(triangle);
