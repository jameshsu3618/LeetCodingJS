/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/


var topKFrequent = function(nums, k) {
  let charMap = new Map();
  let bucket = [];
  let ans = [];

  for (let num of nums) {
      charMap.set(num, (charMap.get(num) || 0) + 1);
  }
  for (let [num, freq] of charMap) {
      if (bucket[freq] === undefined) {
          bucket[freq] = new Set().add(num);
      } else {
          bucket[freq].add(num);
      }
  }
  for(let i = bucket.length-1; i >= 0; i--) {
      if(bucket[i]) ans.push(...bucket[i]);
      if(ans.length === k) break;
  }
  return ans;
};

// using quickselect
function topKFrequent(nums, k) {
  const freqMap = new Map();
  nums.forEach(num => freqMap.set(num, (freqMap.get(num) || 0) + 1));

  const freqArray = Array.from(freqMap, ([num, freq]) => [num, freq]);

  function partition(left, right, pivotIndex) {
      const pivotFrequency = freqArray[pivotIndex][1];
      // Move pivot to the end
      [freqArray[pivotIndex], freqArray[right]] = [freqArray[right], freqArray[pivotIndex]];
      let storeIndex = left;

      for (let i = left; i <= right; i++) {
          if (freqArray[i][1] > pivotFrequency) {
              [freqArray[storeIndex], freqArray[i]] = [freqArray[i], freqArray[storeIndex]];
              storeIndex++;
          }
      }

      // Move pivot to its final place
      [freqArray[right], freqArray[storeIndex]] = [freqArray[storeIndex], freqArray[right]];
      return storeIndex;
  }

  function quickSelect(left, right, kSmallest) {
      while (left <= right) {
          // Randomly choose a pivot
          let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;

          pivotIndex = partition(left, right, pivotIndex);

          if (pivotIndex === kSmallest) {
              return;
          } else if (pivotIndex < kSmallest) {
              left = pivotIndex + 1;
          } else {
              right = pivotIndex - 1;
          }
      }
  }

  quickSelect(0, freqArray.length - 1, k - 1);
  return freqArray.slice(0, k).map(el => el[0]);
}