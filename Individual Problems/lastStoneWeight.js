/* 
You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.
*/

var lastStoneWeight = function(stones) {
  while(stones.length>1){
      stones.sort((a,b)=>a-b); //sort the remaining stones in decending order;
      stones[stones.length-2]=stones[stones.length-1]-stones[stones.length-2]; //smash the first and second stones ie the stones with largest weight ans assign the remaining stone weight to 1st index
      stones.pop();//shift the array to get rid of the 0 index
  }
  return stones[0] //return the 0 index value ie the resultl
}

var lastStoneWeight = function(stones) {
  stones.sort((a, b) => a - b );
  while(stones.length > 1) {
      let a = stones.pop();
      let b = stones.pop();
      let c = a - b;
      if (c > 0) {
        insertIntoSortedArray(stones, c);
      }
  }
  return stones;
};

function insertIntoSortedArray(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  // Binary search to find the correct insertion index
  while (start <= end) {
      mid = Math.floor((start + end) / 2);

      if (arr[mid] === num) {
          break; // Optional: handles the case where the number is already in the array
      } else if (arr[mid] < num) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }

  // Determine the exact index where the number should be inserted
  const insertAt = arr[mid] < num ? mid + 1 : mid;

  // Shift elements to the right and insert the number
  arr.splice(insertAt, 0, num);

  return arr;
}
