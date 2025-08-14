# Two Sum Problem

## Problem Statement
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Examples

### Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Constraints
- 2 ≤ nums.length ≤ 10⁴
- -10⁹ ≤ nums[i] ≤ 10⁹
- -10⁹ ≤ target ≤ 10⁹
- Only one valid answer exists.

## Your Task
Implement the function `twoSum(nums, target)` that returns an array of two indices.

## Approach Hints

### Brute Force Approach:
- Check every possible pair of numbers
- Time Complexity: O(n²)
- Space Complexity: O(1)

### Optimized Approach:
- Use a hash map to store complements
- Single pass through the array
- Time Complexity: O(n)
- Space Complexity: O(n)

## Key Learning Points
- Hash map for O(1) lookups
- Trading space for time complexity
- One-pass optimization technique

## LeetCode Link
🔗 https://leetcode.com/problems/two-sum/

## Difficulty: Easy