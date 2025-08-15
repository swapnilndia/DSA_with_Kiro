# Maximum Subarray

## Problem Statement
Given an integer array `nums`, find the subarray with the largest sum, and return its sum.

A subarray is a contiguous non-empty sequence of elements within an array.

## Examples

### Example 1:
```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

### Example 2:
```
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
```

### Example 3:
```
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```

## Constraints
- 1 ≤ nums.length ≤ 10⁵
- -10⁴ ≤ nums[i] ≤ 10⁴

## Key Insights
- Need to find contiguous subarray with maximum sum
- Single element is also a valid subarray
- Can have negative numbers
- Must handle all negative arrays

## Approach Hints

### Brute Force Approach:
- Check all possible subarrays
- Calculate sum for each subarray
- Time Complexity: O(n²)
- Space Complexity: O(1)

### Kadane's Algorithm (Optimal):
- Dynamic programming approach
- Keep track of current sum and maximum sum
- Reset current sum when it becomes negative
- Time Complexity: O(n)
- Space Complexity: O(1)

## Key Learning Points
- Kadane's algorithm technique
- Dynamic programming concepts
- Handling negative numbers
- Subarray vs subsequence difference

## LeetCode Link
🔗 https://leetcode.com/problems/maximum-subarray/

## Difficulty: Medium