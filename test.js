
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
  console.log(dpHeads);
  console.log(dpTails);
  let result = 0;
  for (let j = 0; j <= k; j++) {
    const current = dpHeads[j] + dpTails[k - j];
    result = current > result ? current : result;
  }
  return result;
};

maxScore([1,2,3,4,5,6,1], 3);
