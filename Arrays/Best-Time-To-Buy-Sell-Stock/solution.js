/**
 * Best Time to Buy and Sell Stock
 * LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

// Approach 1: Brute Force
function maxProfitBruteForce(prices) {
    // TODO: Implement brute force solution
    // Hint: Check all possible buy-sell combinations
    let maxDiff = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxDiff) {
                maxDiff = profit
            }
        }
    }
    return maxDiff
}

// Approach 2: Optimized Single Pass
function maxProfit(prices) {
    // TODO: Implement optimized solution
    // Hint: Track minimum price and maximum profit in single pass
    if (prices.length == 0) return 0;
    let cheapestSoFar = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < cheapestSoFar) {
            cheapestSoFar = prices[i]
        }
        let currentProfit = prices[i] - cheapestSoFar
        if (currentProfit > profit) {
            profit = currentProfit
        }
    }
    return profit
}

// Test cases
console.log("=== Best Time to Buy and Sell Stock Test Cases ===\n");

const testCases = [
    { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
    { prices: [7, 6, 4, 3, 1], expected: 0 },
    { prices: [1, 2, 3, 4, 5], expected: 4 },
    { prices: [5], expected: 0 },
    { prices: [2, 1], expected: 0 },
    { prices: [1, 2], expected: 1 }
];

testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: prices = [${test.prices}]`);
    console.log(`Brute Force: ${maxProfitBruteForce(test.prices)}`);
    console.log(`Optimized: ${maxProfit(test.prices)}`);
    console.log(`Expected: ${test.expected}\n`);
});

// Complexity Analysis
console.log("=== Complexity Analysis ===");
console.log("Brute Force: Time O(n²), Space O(1)");
console.log("Optimized: Time O(n), Space O(1)");

module.exports = { maxProfit, maxProfitBruteForce };