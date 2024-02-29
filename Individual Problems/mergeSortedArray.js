/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// With Making a copy, space complexity is O(M)
var mergeWithCopy = function(nums1, m, nums2, n) {
  let numsCopy = []
  // make copy of nums1
  for (let i = 0; i < m; i ++) {
      numsCopy.push(nums1[i]);
  }

  let i = 0;
  let j = 0;
  for (let k = 0;  k < m + n; k ++) {
      if (j >= n || (i < m && numsCopy[i] < nums2[j])) {
          nums1[k] = numsCopy[i];
          i ++;
      } else {
          nums1[k] = nums2[j];
          j ++;
      }
  }
};

// no copies just adding from the back 
var mergeWithoutCopy = function(nums1, m, nums2, n) {
  let index1 = m - 1; // Last index of the initial portion of nums1
  let index2 = n - 1; // Last index of nums2
  let mergeIndex = m + n - 1; // Last index of the merged array

  // Iterate from the end of the array
  while (index2 >= 0) {
      // If all elements from nums1 have been merged, then just take the remaining nums2 elements
      if (index1 < 0) {
          nums1[mergeIndex--] = nums2[index2--];
          continue;
      }

      // Compare elements from the end of nums1 and nums2 and merge them into nums1
      if (nums1[index1] > nums2[index2]) {
          nums1[mergeIndex--] = nums1[index1--];
      } else {
          nums1[mergeIndex--] = nums2[index2--];
      }
  }
};