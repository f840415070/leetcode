/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  for (let i = matrix.length - 2; i >= 0; i--) {
    for (j = 0; j < matrix[i].length; j++) {
      matrix[i][j] += Math.min(
        j === 0 ? Infinity : matrix[i + 1][j - 1],
        matrix[i + 1][j],
        j === matrix[i].length - 1 ? Infinity : matrix[i + 1][j + 1],
      );
    }
  }
  return Math.min(...matrix[0]);
};
// @lc code=end

