/**
 * Remove Duplicates from Sorted Array
 * LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

// Approach 1: Extra Array
function removeDuplicatesExtraArray(nums) {
    // TODO: Implement using extra array
    // Hint: Create new array with unique elements, then copy back
    
}

// Approach 2: Two Pointers (Optimal)
function removeDuplicates(nums) {
    // TODO: Implement two pointers solution
    // Hint: Use one pointer for unique position, another to iterate
    
}

// Test cases
console.log("=== Remove Duplicates from Sorted Array Test Cases ===\n");

const testCases = [
    { nums: [1, 1, 2], expected: 2, expectedArray: [1, 2] },
    { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: 5, expectedArray: [0, 1, 2, 3, 4] },
    { nums: [1, 2, 3], expected: 3, expectedArray: [1, 2, 3] },
    { nums: [1, 1, 1], expected: 1, expectedArray: [1] },
    { nums: [1], expected: 1, expectedArray: [1] },
    { nums: [-1, 0, 0, 0, 3, 3], expected: 3, expectedArray: [-1, 0, 3] }
];

testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: nums = [${test.nums}]`);
    
    // Test extra array approach
    let nums1 = [...test.nums];
    let result1 = removeDuplicatesExtraArray(nums1);
    console.log(`Extra Array: k = ${result1}, nums = [${nums1.slice(0, result1)}]`);
    
    // Test two pointers approach
    let nums2 = [...test.nums];
    let result2 = removeDuplicates(nums2);
    console.log(`Two Pointers: k = ${result2}, nums = [${nums2.slice(0, result2)}]`);
    
    console.log(`Expected: k = ${test.expected}, nums = [${test.expectedArray}]\n`);
});

// Complexity Analysis
console.log("=== Complexity Analysis ===");
console.log("Extra Array: Time O(n), Space O(n)");
console.log("Two Pointers: Time O(n), Space O(1)");

module.exports = { removeDuplicates, removeDuplicatesExtraArray };