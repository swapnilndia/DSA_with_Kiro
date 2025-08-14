/**
 * Product of Array Except Self
 * LeetCode: https://leetcode.com/problems/product-of-array-except-self/
 */

// Approach 1: Brute Force
function productExceptSelfBruteForce(nums) {
    // TODO: Implement brute force solution
    // Hint: For each index, multiply all other elements
    
}

// Approach 2: Left and Right Arrays
function productExceptSelfTwoArrays(nums) {
    // TODO: Implement using separate left and right product arrays
    // Hint: Create leftProducts and rightProducts arrays first
    
}

// Approach 3: Optimized Single Array (Space Optimized)
function productExceptSelf(nums) {
    // TODO: Implement space-optimized solution
    // Hint: Use result array to store left products, then multiply with right products in second pass
    
}

// Test cases
console.log("=== Product of Array Except Self Test Cases ===\n");

const testCases = [
    { nums: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
    { nums: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0] },
    { nums: [2, 3], expected: [3, 2] },
    { nums: [1, 0], expected: [0, 1] },
    { nums: [0, 0], expected: [0, 0] },
    { nums: [1, 2, 3, 4, 5], expected: [120, 60, 40, 30, 24] }
];

testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: nums = [${test.nums}]`);
    console.log(`Brute Force: [${productExceptSelfBruteForce(test.nums)}]`);
    console.log(`Two Arrays: [${productExceptSelfTwoArrays(test.nums)}]`);
    console.log(`Optimized: [${productExceptSelf(test.nums)}]`);
    console.log(`Expected: [${test.expected}]\n`);
});

// Complexity Analysis
console.log("=== Complexity Analysis ===");
console.log("Brute Force: Time O(n²), Space O(1)");
console.log("Two Arrays: Time O(n), Space O(n)");
console.log("Optimized: Time O(n), Space O(1) extra");

module.exports = { productExceptSelf, productExceptSelfBruteForce, productExceptSelfTwoArrays };