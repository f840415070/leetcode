const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];

var minimumTotal = function(triangle) {
  const tl = triangle.length;
  for (let i = tl - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(
        triangle[i + 1][j],
        triangle[i + 1][j + 1],
      );
    }
  }
  return triangle[0][0];
};

minimumTotal(triangle);
