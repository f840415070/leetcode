#
# @lc app=leetcode.cn id=38 lang=python3
#
# [38] 外观数列
#

# @lc code=start
class Solution:
    def countAndSay(self, n: int) -> str:
        x = '1'
        if n == 1:
            return x
        i = 1
        while i < n:
            y = ''
            j = 1
            for k in range(len(x) - 1):
                if x[k] == x[k + 1]:
                    j += 1
                else:
                    y += str(j) + x[k]
                    j = 1
            x = y
            i += 1
        return x


# @lc code=end

