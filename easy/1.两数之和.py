#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] 两数之和
#

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}
        numsLen = len(nums)
        for i in range(numsLen):
            if nums[i] in hashMap:
                return [hashMap[nums[i]], i]
            hashMap[target - nums[i]] = i
        return []
# @lc code=end

