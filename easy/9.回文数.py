#
# @lc app=leetcode.cn id=9 lang=python3
#
# [9] 回文数
#


# @lc code=start
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or (x % 10 == 0 and x != 0):
            return False
        revertedNum = 0
        while revertedNum < x:
            revertedNum = revertedNum * 10 + x % 10
            x //= 10
        return x == revertedNum or x == revertedNum // 10


# @lc code=end
