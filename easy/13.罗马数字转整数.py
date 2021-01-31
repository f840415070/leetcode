#
# @lc app=leetcode.cn id=13 lang=python3
#
# [13] 罗马数字转整数
#

# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        romanMap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }
        result = 0
        while s:
            if len(s) == 1:
                result += romanMap[s[0]]
                return result

            if romanMap[s[-2]] < romanMap[s[-1]]:
                result += romanMap[s[-1]] - romanMap[s[-2]]
                s = s[:-2]
            else:
                result += romanMap[s[-1]]
                s = s[:-1]
        return result
# @lc code=end

