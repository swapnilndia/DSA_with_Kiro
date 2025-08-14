/**
 * Two Sum - Multiple Approaches
 * LeetCode: https://leetcode.com/problems/two-sum/
 */

// Approach 1: Brute Force
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Approach 2: Hash Map (Optimized)
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}

// Test cases
console.log("=== Two Sum Test Cases ===\n");

const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
    { nums: [-1, -2, -3, -4, -5], target: -8, expected: [2, 4] }
];

testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: nums = [${test.nums}], target = ${test.target}`);
    console.log(`Brute Force: [${twoSumBruteForce(test.nums, test.target)}]`);
    console.log(`Optimized: [${twoSum(test.nums, test.target)}]`);
    console.log(`Expected: [${test.expected}]\n`);
});

// Complexity Analysis
console.log("=== Complexity Analysis ===");
console.log("Brute Force: Time O(n²), Space O(1)");
console.log("Hash Map: Time O(n), Space O(n)");

module.exports = { twoSum, twoSumBruteForce };