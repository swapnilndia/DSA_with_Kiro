/**
 * Maximum Subarray (Kadane's Algorithm)
 * LeetCode: https://leetcode.com/problems/maximum-subarray/
 * 
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

// Approach 1: Brute Force
function maxSubArrayBruteForce(nums) {
    // TODO: Implement brute force solution
    // Hint: Check all possible subarrays and find maximum sum
    
}

// Approach 2: Kadane's Algorithm (Optimal)
function maxSubArray(nums) {
    // TODO: Implement Kadane's algorithm
    // Hint: Keep track of current sum and maximum sum seen so far
    
}

// Test cases
console.log("=== Maximum Subarray Test Cases ===\n");

const testCases = [
    { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 }, // [4,-1,2,1]
    { nums: [1], expected: 1 },
    { nums: [5, 4, -1, 7, 8], expected: 23 }, // [5,4,-1,7,8]
    { nums: [-1], expected: -1 },
    { nums: [-2, -1], expected: -1 },
    { nums: [1, 2, 3, 4], expected: 10 }, // [1,2,3,4]
    { nums: [-1, -2, -3, -4], expected: -1 } // [-1]
];

testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: nums = [${test.nums}]`);
    console.log(`Brute Force: ${maxSubArrayBruteForce(test.nums)}`);
    console.log(`Kadane's Algorithm: ${maxSubArray(test.nums)}`);
    console.log(`Expected: ${test.expected}\n`);
});

// Complexity Analysis
console.log("=== Complexity Analysis ===");
console.log("Brute Force: Time O(n²), Space O(1)");
console.log("Kadane's Algorithm: Time O(n), Space O(1)");

module.exports = { maxSubArray, maxSubArrayBruteForce };