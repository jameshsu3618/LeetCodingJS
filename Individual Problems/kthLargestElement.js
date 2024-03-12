function findKthLargest(nums, k) {
  return quickSelect(nums, k);
}

function quickSelect(nums, k) {
  if (nums.length === 1) return nums[0];

  const pivot = nums[Math.floor(Math.random() * nums.length)];
  const left = [];
  const mid = [];
  const right = [];

  nums.forEach(num => {
    if (num > pivot) {
      left.push(num);
    } else if (num < pivot) {
      right.push(num);
    } else {
      mid.push(num);
    }
  });

  if (k <= left.length) {
    return quickSelect(left, k);
  } else if (k > left.length + mid.length) {
    return quickSelect(right, k - left.length - mid.length);
  } else {
    return pivot;
  }
}