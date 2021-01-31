#
# @lc app=leetcode.cn id=7 lang=python3
#
# [7] 整数反转
#

# @lc code=start
class Solution:
    def reverse(self, x: int) -> int:
        MIN, MAX = -2147483648, 2147483647
        isPositive = x > 0
        absX = abs(x)
        revertedNum = 0
        while absX:
            revertedNum = revertedNum * 10 + absX % 10
            if revertedNum < MIN or revertedNum > MAX:
                return 0
            absX //= 10
        return revertedNum if isPositive else revertedNum * -1 
# @lc code=end

