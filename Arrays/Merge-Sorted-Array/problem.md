# Merge Sorted Array

## Problem Statement
You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums2` into `nums1` as one sorted array.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to 0 and should be ignored. `nums2` has a length of `n`.

## Examples

### Example 1:
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

### Example 2:
```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

### Example 3:
```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the array has a length of 1.
```

## Constraints
- nums1.length == m + n
- nums2.length == n
- 0 ≤ m, n ≤ 200
- 1 ≤ m + n ≤ 200
- -10⁹ ≤ nums1[i], nums2[j] ≤ 10⁹

## Key Insights
- Both arrays are already sorted
- nums1 has extra space at the end
- Must merge in-place into nums1
- Think about merge direction

## Approach Hints

### Extra Array Approach:
- Create new array and merge both arrays
- Copy result back to nums1
- Time Complexity: O(m + n)
- Space Complexity: O(m + n)

### Two Pointers (Forward):
- Start from beginning of both arrays
- Need to shift elements in nums1
- Time Complexity: O(m + n)
- Space Complexity: O(1)

### Two Pointers (Backward - Optimal):
- Start from end of both arrays
- Fill nums1 from the back
- Time Complexity: O(m + n)
- Space Complexity: O(1)

## Key Learning Points
- Two pointers technique
- Merge algorithm from merge sort
- In-place array manipulation
- Working backwards to avoid overwrites

## LeetCode Link
🔗 https://leetcode.com/problems/merge-sorted-array/

## Difficulty: Easy