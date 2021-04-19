/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return max;
};
// @lc code=end

