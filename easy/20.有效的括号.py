#
# @lc app=leetcode.cn id=20 lang=python3
#
# [20] 有效的括号
#

# @lc code=start
class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 == 1:
            return False
        stack = []
        for aChar in s:
            if aChar == '(':
                stack.append(')')
            elif aChar == '{':
                stack.append('}')
            elif aChar == '[':
                stack.append(']')
            else:
                if not stack or stack.pop() != aChar:
                    return False

        return False if stack else True


# @lc code=end

