/* 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

var containsDuplicate = function(nums) {
  let prevNums = new Set();
  for (let i = 0; i < nums.length; i++) {
      if (prevNums.has(nums[i])) {
          return true;
      } else {
          prevNums.add(nums[i]);
      }
  }
  return false;
};