/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!i && !j) {
        continue;
      }
      let val = Infinity;
      if (i > 0) {
        val = Math.min(val, grid[i - 1][j]);
      }
      if (j > 0) {
        val = Math.min(val, grid[i][j - 1]);
      }
      grid[i][j] += val;
    }
  }
  return grid[m - 1][n - 1];
};
// @lc code=end

