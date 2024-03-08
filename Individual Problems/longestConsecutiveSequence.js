/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time. 
*/

var longestConsecutive = function(nums) {
  let numSet = new Set(nums); // Initialize the set with nums directly
  let maxCount = 0;

  for (let num of numSet) {
      // Only start counting if the previous number isn't in the set
      if (!numSet.has(num - 1)) {
          let count = 1;

          // Check for the next numbers in the sequence
          while (numSet.has(num + count)) {
              count++;
          }

          maxCount = Math.max(maxCount, count);
      }
  }
  return maxCount;
};

var longestConsecutive1 = function(nums) {
  let numSet = new Set(nums); // Initialize the set with nums directly
  let maxCount = 0;

  for (let num of numSet) {
      // Only start counting if the previous number isn't in the set
      if (!numSet.has(num - 1)) {
          let currentNum = num;
          let count = 1;

          // Check for the next numbers in the sequence
          while (numSet.has(currentNum + 1)) {
              currentNum++;
              count++;
          }

          maxCount = Math.max(maxCount, count);
      }
  }
  return maxCount;
};


// not ideal since it counts everything again. Find first number to count from instead
var longestConsecutive = function(nums) {
  let numSet = new Set();
  let maxCount = 0
  for (let num of nums) {
      numSet.add(num);
  }
  for (let num of numSet) {
      let count = 1;
      while (numSet.has(num + count)) {
          count ++;
      }
      maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};

