var SparseVector = function(nums) {
  this.sparseV = new Map();
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          this.sparseV.set(i, nums[i]);
      }
  }
};

// Return the dotProduct of two sparse vectors
/**
* @param {SparseVector} vec
* @return {number}
*/
SparseVector.prototype.dotProduct = function(vec) {
  let output = 0;
  // Ensure that we iterate over the smaller map to improve efficiency
  const smallerMap = this.sparseV.size < vec.sparseV.size ? this.sparseV : vec.sparseV;
  const largerMap = this.sparseV.size < vec.sparseV.size ? vec.sparseV : this.sparseV;

  for (let [index, value] of smallerMap) {
      if (largerMap.has(index)){
          output += value * largerMap.get(index);
      }
  }
  return output;
};
