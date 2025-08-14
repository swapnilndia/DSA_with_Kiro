# Product of Array Except Self

## Problem Statement
Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operator.

## Examples

### Example 1:
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Explanation: 
- answer[0] = 2*3*4 = 24
- answer[1] = 1*3*4 = 12  
- answer[2] = 1*2*4 = 8
- answer[3] = 1*2*3 = 6
```

### Example 2:
```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
Explanation:
- answer[0] = 1*0*(-3)*3 = 0
- answer[1] = (-1)*0*(-3)*3 = 0
- answer[2] = (-1)*1*(-3)*3 = 9
- answer[3] = (-1)*1*0*3 = 0
- answer[4] = (-1)*1*0*(-3) = 0
```

## Constraints
- 2 ≤ nums.length ≤ 10⁵
- -30 ≤ nums[i] ≤ 30
- The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

## Key Insights
- Cannot use division operator
- Must be O(n) time complexity
- Think about what each result element represents
- Consider prefix and suffix products

## Approach Hints

### Brute Force Approach:
- For each index, multiply all other elements
- Time Complexity: O(n²)
- Space Complexity: O(1) extra space

### Division Approach (Not Allowed):
- Calculate total product, divide by current element
- Fails with zeros and violates constraints

### Prefix/Suffix Products (Optimal):
- Calculate left products and right products separately
- Combine them to get final result
- Time Complexity: O(n)
- Space Complexity: O(1) extra space (output array doesn't count)

## Key Learning Points
- Prefix and suffix array techniques
- Two-pass algorithm optimization
- Handling edge cases (zeros)
- Space optimization strategies

## LeetCode Link
🔗 https://leetcode.com/problems/product-of-array-except-self/

## Difficulty: Medium