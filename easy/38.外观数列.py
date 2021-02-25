#
# @lc app=leetcode.cn id=38 lang=python3
#
# [38] 外观数列
#

# @lc code=start
class Solution:
    def countAndSay(self, n: int) -> str:
        result = '1'
        for _ in range(n - 1):
            p, s = 0, ''
            for i, char in enumerate(result):
                if result[p] != char:
                    s += str(i - p) + result[p]
                    p = i
            result = s + str(len(result) - p) + result[p]
        return result


# @lc code=end

