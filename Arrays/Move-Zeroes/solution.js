/**
 * Move Zeroes
 * LeetCode: https://leetcode.com/problems/move-zeroes/
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining 
 * the relative order of the non-zero elements.
 * Note: You must do this in-place without making a copy of the array.
 */

// Approach 1: Extra Array (Not optimal - violates in-place requirement)
function moveZeroesExtraArray(nums) {
    // TODO: Implement using extra array (for learning)
    // Hint: Create new array, add non-zeros first, then zeros
    
}

// Approach 2: Two Pointers (Optimal)
function moveZeroes(nums) {
    // TODO: Implement two pointers solution
    // Hint: Use one pointer for non-zero position, another to iterate
    
}

// Test cases
console.log("=== Move Zeroes Test Cases ===\n");

const testCases = [
    { nums: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
    { nums: [0], expected: [0] },
    { nums: [1, 2, 3], expected: [1, 2, 3] },
    { nums: [0, 0, 1], expected: [1, 0, 0] },
    { nums: [1, 0, 2, 0, 3, 0, 4], expected: [1, 2, 3, 4, 0, 0, 0] },
    { nums: [0, 0, 0], expected: [0, 0, 0] }
];

testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: nums = [${test.nums}]`);
    
    // Test extra array approach
    let nums1 = [...test.nums];
    moveZeroesExtraArray(nums1);
    console.log(`Extra Array: [${nums1}]`);
    
    // Test two pointers approach
    let nums2 = [...test.nums];
    moveZeroes(nums2);
    console.log(`Two Pointers: [${nums2}]`);
    
    console.log(`Expected: [${test.expected}]\n`);
});

// Complexity Analysis
console.log("=== Complexity Analysis ===");
console.log("Extra Array: Time O(n), Space O(n)");
console.log("Two Pointers: Time O(n), Space O(1)");

module.exports = { moveZeroes, moveZeroesExtraArray };