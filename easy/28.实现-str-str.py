#
# @lc app=leetcode.cn id=28 lang=python3
#
# [28] 实现 strStr()
#

# @lc code=start
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not needle:
            return 0
        needleLength = len(needle)
        for i in range(len(haystack) - needleLength + 1):
            if haystack[i: i + needleLength] == needle:
                return i
       
        return -1

# @lc code=end

