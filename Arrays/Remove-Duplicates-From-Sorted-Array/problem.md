# Remove Duplicates from Sorted Array

## Problem Statement
Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

Consider the number of unique elements of `nums` to be `k`, to get accepted, you need to do the following things:
- Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially.
- Return `k`.

## Examples

### Example 1:
```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Example 2:
```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## Constraints
- 1 ≤ nums.length ≤ 3 × 10⁴
- -100 ≤ nums[i] ≤ 100
- `nums` is sorted in non-decreasing order.

## Key Insights
- Array is already sorted
- Must be done in-place
- Only need to return count of unique elements
- Order must be maintained

## Approach Hints

### Brute Force Approach:
- Use extra array to store unique elements
- Copy back to original array
- Time Complexity: O(n)
- Space Complexity: O(n)

### Two Pointers Approach (Optimal):
- Use one pointer for unique position
- Use another pointer to iterate
- Time Complexity: O(n)
- Space Complexity: O(1)

## Key Learning Points
- Two pointers technique
- In-place array modification
- Working with sorted arrays
- Understanding problem constraints

## LeetCode Link
🔗 https://leetcode.com/problems/remove-duplicates-from-sorted-array/

## Difficulty: Easy