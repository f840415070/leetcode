/*
 * @lc app=leetcode.cn id=1423 lang=javascript
 *
 * [1423] 可获得的最大点数
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  const { length } = cardPoints;
  if (k === length) {
    return cardPoints.reduce((s, n) => s + n);
  }
  const dpHeads = Array(k + 1);
  const dpTails = Array(k + 1);
  dpHeads[0] = 0;
  dpTails[0] = 0;
  for (let i = 1; i <= k; i++) {
    dpHeads[i] = dpHeads[i - 1] + cardPoints[i - 1];
    dpTails[i] = dpTails[i - 1] + cardPoints[length - i];
  }
  let result = 0;
  for (let j = 0; j <= k; j++) {
    const current = dpHeads[j] + dpTails[k - j];
    result = current > result ? current : result;
  }
  return result;
};
// @lc code=end

