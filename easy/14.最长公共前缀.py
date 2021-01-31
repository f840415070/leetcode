#
# @lc app=leetcode.cn id=14 lang=python3
#
# [14] 最长公共前缀
#

# @lc code=start
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        result = ''
        zipedList = list(zip(*strs))
        for zipedOne in zipedList:
            if len(set(zipedOne)) != 1:
                break
            result += zipedOne[0]
        return result


# @lc code=end

'''
    if not strs:
        return ''
    result = ''
    shortestStr = strs[0]
    shortestLen = len(strs[0])
    for aStr in strs[1:]:
        if len(aStr) < shortestLen:
            shortestLen = len(aStr)
            shortestStr = aStr
    i = 0
    while i < shortestLen:
        for aStr in strs:
            if shortestStr[i] != aStr[i]:
                return result
        result += shortestStr[i]
        i += 1
    return result
'''