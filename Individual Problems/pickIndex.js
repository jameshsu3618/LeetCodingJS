var Solution = function(w) {
  this.maxWeight = 0;
  this.weighted = [];
  for (let weight in w) {
    this.maxWeight += weight;
    this.weighted.push(this.maxWeight);
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = Math.floor(Math.random*this.maxWeight) + 1;
    let low = 0;
    let high = this.maxWeight.length - 1;

    while (low < high) {
      let mid = (low + high)/2
      if (target > mid) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
};