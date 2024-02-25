/* 
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: [] 
*/


function combinationSum(candidates, target) {
  const result = [];

  function backtrack(remain, combination, start) {
      if (remain === 0) {
          // Make a deep copy of the current combination,
          // as the combination would be backtracked later.
          result.push([...combination]);
          return;
      }
      for (let i = start; i < candidates.length; i++) {
          if (remain - candidates[i] >= 0) {
              // Choose the number candidates[i]
              combination.push(candidates[i]);
              // Explore further with the chosen number, allowing it to be chosen again
              backtrack(remain - candidates[i], combination, i);
              // Undo the choice
              combination.pop();
          }
      }
  }

  backtrack(target, [], 0);
  return result;
}

function combinationSum(candidates, target) {
  let result = [];
  let temp = [];

  // Recursive function to find the combination
  function backtrack(start, target) {
      if (target === 0) {
          // If the remaining target is 0, we found a combination
          result.push([...temp]);
          return;
      }
      if (target < 0) {
          // If the remaining target is negative, no need to proceed
          return;
      }

      for (let i = start; i < candidates.length; i++) {
          // Include the candidate
          temp.push(candidates[i]);
          // Explore further with the current candidate included
          backtrack(i, target - candidates[i]);
          // Backtrack, remove the last candidate
          temp.pop();
      }
  }

  backtrack(0, target);
  return result;
}
