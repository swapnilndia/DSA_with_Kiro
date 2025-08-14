# Best Time to Buy and Sell Stock

## Problem Statement
You are given an array `prices` where `prices[i]` is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

## Examples

### Example 1:
```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

### Example 2:
```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

### Example 3:
```
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
```

## Constraints
- 1 ≤ prices.length ≤ 10⁵
- 0 ≤ prices[i] ≤ 10⁴

## Key Insights
- You can only buy before you sell (no time travel!)
- You want to find the maximum difference between a later price and an earlier price
- Think about what information you need to track as you iterate

## Approach Hints

### Brute Force Approach:
- Check every possible buy-sell pair
- For each day i, check all future days j where j > i
- Time Complexity: O(n²)
- Space Complexity: O(1)

### Optimized Approach:
- Track the minimum price seen so far
- For each day, calculate profit if you sold today
- Keep track of maximum profit seen
- Time Complexity: O(n)
- Space Complexity: O(1)

## Key Learning Points
- Single-pass array traversal
- Greedy algorithm concepts
- State tracking while iterating
- Optimization from O(n²) to O(n)

## LeetCode Link
🔗 https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

## Difficulty: Easy