var findBuildings = function(heights) {
  let oceanView = [];
  let ans = []
  maxHeight = 0;
  for (let i = heights.length -1; i >= 0; i--) {
      if (heights[i] > maxHeight) {
          maxHeight = heights[i];
          oceanView.push(i);
      }
  }
  for (let i = 0; i < oceanView.length; i++) {
      ans.push(oceanView[oceanView.length-1-i])
  }
  return ans;
};

var findBuildings = function(heights) {
  const stack = []
  for (let i = 0; i < heights.length; i++) {
      while (stack.length && heights[i] >= heights[stack[stack.length - 1]]) {
          stack.pop()
      }
      stack.push(i)
  }
  return stack
}