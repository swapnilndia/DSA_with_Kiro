# Contains Duplicate

## Problem Statement
Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

## Examples

### Example 1:
```
Input: nums = [1,2,3,1]
Output: true
Explanation: The element 1 occurs at index 0 and 3.
```

### Example 2:
```
Input: nums = [1,2,3,4]
Output: false
Explanation: All elements are distinct.
```

### Example 3:
```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

## Constraints
- 1 ≤ nums.length ≤ 10⁵
- -10⁹ ≤ nums[i] ≤ 10⁹

## Approach Hints

### Brute Force Approach:
- Check every pair of elements
- Time Complexity: O(n²)
- Space Complexity: O(1)

### Sorting Approach:
- Sort the array first
- Check adjacent elements for duplicates
- Time Complexity: O(n log n)
- Space Complexity: O(1) or O(n) depending on sort

### Hash Set Approach (Optimal):
- Use a Set to track seen elements
- Time Complexity: O(n)
- Space Complexity: O(n)

## Key Learning Points
- Hash Set for O(1) lookups
- Trading space for time complexity
- Understanding different approach trade-offs

## LeetCode Link
🔗 https://leetcode.com/problems/contains-duplicate/

## Difficulty: Easy