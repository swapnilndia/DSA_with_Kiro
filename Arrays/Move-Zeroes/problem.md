# Move Zeroes

## Problem Statement
Given an integer array `nums`, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

**Note:** You must do this in-place without making a copy of the array.

## Examples

### Example 1:
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Explanation: All non-zero elements maintain their relative order, and zeros are moved to the end.
```

### Example 2:
```
Input: nums = [0]
Output: [0]
Explanation: Single zero remains in place.
```

### Example 3:
```
Input: nums = [1,2,3]
Output: [1,2,3]
Explanation: No zeros to move, array remains unchanged.
```

## Constraints
- 1 ≤ nums.length ≤ 10⁴
- -2³¹ ≤ nums[i] ≤ 2³¹ - 1

## Key Insights
- Must be done in-place (no extra array)
- Maintain relative order of non-zero elements
- All zeros should be at the end
- Minimize number of operations

## Approach Hints

### Extra Array Approach (Not Optimal):
- Create new array, add non-zeros first, then zeros
- Time Complexity: O(n)
- Space Complexity: O(n) - violates in-place requirement

### Two Pointers Approach (Optimal):
- Use one pointer for non-zero position
- Use another pointer to iterate through array
- Swap elements when needed
- Time Complexity: O(n)
- Space Complexity: O(1)

### Alternative Two Pointers:
- First pass: move all non-zeros to front
- Second pass: fill remaining positions with zeros
- Time Complexity: O(n)
- Space Complexity: O(1)

## Key Learning Points
- Two pointers technique
- In-place array manipulation
- Maintaining relative order
- Minimizing write operations

## LeetCode Link
🔗 https://leetcode.com/problems/move-zeroes/

## Difficulty: Easy