#
# @lc app=leetcode.cn id=35 lang=python3
#
# [35] 搜索插入位置
#

# @lc code=start
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        n, l = 0, len(nums) - 1
        while n <= l:
            mid = (n + l) // 2
            if nums[mid] < target:
                n = mid + 1
            else:
                if nums[mid] == target and nums[mid - 1] != target:
                    return mid
                else:
                    l = mid - 1
        return n
# @lc code=end

