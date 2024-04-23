---
sidebar_position: 1
---

# Median of Two Sorted Arrays

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

## Examples

### Example 1
```py
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

### Example 2
```py
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

## Constraints
 - `nums1.length == m`
 - `nums2.length == n`
 - `0 <= m <= 1000`
 - `0 <= n <= 1000`
 - `1 <= m + n <= 2000`
 - `-106 <= nums1[i], nums2[i] <= 106`

## Solution

### Approach
To find the median of the two sorted arrays, we first merge the two arrays into one sorted array. Then, based on whether the combined length is even or odd, we calculate the median accordingly.

### Pseudocode
1. Merge `nums1` and `nums2` into a single sorted array `nums`.
2. Find the middle index of `nums`.
3. If the length of `nums` is even, calculate the median as the average of the two middle elements.
4. If the length of `nums` is odd, the median is the middle element itself.
5. Return the calculated median.

### Code
```python
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = sorted((nums1+nums2))
        median = 0
        middle = len(nums)//2
        if len(nums)%2==0:
            median = (nums[middle]+nums[middle-1])/2
        else:
            median = nums[middle]

        return median
```

### Complexity Analysis
- **Time Complexity**: O(m + n + log(m + n)), where m and n are the lengths of `nums1` and `nums2` respectively. This is due to the sorting operation and finding the median.
- **Space Complexity**: O(m + n) for the merged array `nums`.


This documentation provides a clear explanation of the problem, the approach used to solve it, the code implementation, and the complexity analysis of the solution.
## Links
 - *LeetCode*: https://leetcode.com/problems/median-of-two-sorted-arrays/
