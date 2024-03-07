/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

var productExceptSelf = function(nums) {
  let ans = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length - 1; i++) {
      ans[i + 1] = ans[i] * nums[i];
  }
  
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
      ans[i] = ans[i] * right;
      right = right * nums[i];
  }
  return ans;
};