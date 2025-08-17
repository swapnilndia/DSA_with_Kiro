/**
 * Merge Sorted Array
 * LeetCode: https://leetcode.com/problems/merge-sorted-array/
 */

// Approach 1: Extra Array
function mergeExtraArray(nums1, m, nums2, n) {
    // TODO: Implement using extra array
    // Hint: Create new array, merge both arrays, copy back to nums1
    
}

// Approach 2: Two Pointers Forward
function mergeTwoPointersForward(nums1, m, nums2, n) {
    // TODO: Implement two pointers starting from beginning
    // Hint: Start from beginning, but need to handle shifting
    
}

// Approach 3: Two Pointers Backward (Optimal)
function merge(nums1, m, nums2, n) {
    // TODO: Implement two pointers starting from end
    // Hint: Start from end of both arrays, fill nums1 from back
    
}

// Test cases
console.log("=== Merge Sorted Array Test Cases ===\n");

const testCases = [
    { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3, expected: [1, 2, 2, 3, 5, 6] },
    { nums1: [1], m: 1, nums2: [], n: 0, expected: [1] },
    { nums1: [0], m: 0, nums2: [1], n: 1, expected: [1] },
    { nums1: [4, 5, 6, 0, 0, 0], m: 3, nums2: [1, 2, 3], n: 3, expected: [1, 2, 3, 4, 5, 6] },
    { nums1: [1, 2, 4, 5, 6, 0], m: 5, nums2: [3], n: 1, expected: [1, 2, 3, 4, 5, 6] },
    { nums1: [2, 0], m: 1, nums2: [1], n: 1, expected: [1, 2] }
];

testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: nums1 = [${test.nums1}], m = ${test.m}, nums2 = [${test.nums2}], n = ${test.n}`);
    
    // Test extra array approach
    let nums1_1 = [...test.nums1];
    mergeExtraArray(nums1_1, test.m, test.nums2, test.n);
    console.log(`Extra Array: [${nums1_1}]`);
    
    // Test two pointers forward approach
    let nums1_2 = [...test.nums1];
    mergeTwoPointersForward(nums1_2, test.m, test.nums2, test.n);
    console.log(`Two Pointers Forward: [${nums1_2}]`);
    
    // Test two pointers backward approach
    let nums1_3 = [...test.nums1];
    merge(nums1_3, test.m, test.nums2, test.n);
    console.log(`Two Pointers Backward: [${nums1_3}]`);
    
    console.log(`Expected: [${test.expected}]\n`);
});

// Complexity Analysis
console.log("=== Complexity Analysis ===");
console.log("Extra Array: Time O(m + n), Space O(m + n)");
console.log("Two Pointers Forward: Time O(m + n), Space O(1)");
console.log("Two Pointers Backward: Time O(m + n), Space O(1)");

module.exports = { merge, mergeExtraArray, mergeTwoPointersForward };