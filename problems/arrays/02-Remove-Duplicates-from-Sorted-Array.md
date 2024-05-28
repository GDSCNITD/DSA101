---
sidebar_position: 2
---

# Remove Duplicates from Sorted Array

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) such that each unique element appears only **once**. The **relative order** of the elements should be kept the **same**. Then return the number of unique elements in `nums`.

Consider the number of unique elements of `nums` to be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially.The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

## Example
### Example 1:

**Input**: nums = `[1,1,2]`

**Output**: 2, nums = `[1,2,_]`

**Explanation**: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
### Example 2:

**Input**: nums = `[0,0,1,1,1,2,2,3,3,4]`

**Output**: 5, nums = `[0,1,2,3,4,_,_,_,_,_]`

**Explanation**: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

 
## Problem
We highly encourage you to try solving the problem before looking at the solution.

### Problem Link
*LeetCode* - [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

<details><summary>Click - to see solution</summary>

## Solution Using Two-Pointer Technique

To solve the problem efficiently, we can use the two-pointer technique. This method ensures the array is modified in-place with an O(n) time complexity.

### Approach

1. Use one pointer (`i`) to iterate through the array.
2. Use another pointer (`k`) to track the position of the next unique element.
3. Compare each element with the last unique element found. If it’s different, place it in the `k` position and increment `k`.
4. Continue this process until you’ve traversed the entire array.

### Implementation in Python

```python
class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0

        k = 1  # Initialize the index for the next unique element

        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[k] = nums[i]
                k += 1
        
        return k

# Example usage:
sol = Solution()
nums1 = [1, 1, 2]
nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

k1 = sol.removeDuplicates(nums1)
k2 = sol.removeDuplicates(nums2)

print(f"Output for nums1: k = {k1}, nums = {nums1[:k1]}")
print(f"Output for nums2: k = {k2}, nums = {nums2[:k2]}")
``` 
