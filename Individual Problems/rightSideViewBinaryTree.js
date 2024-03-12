var rightSideView = function(root) {
  if (!root) return []; // Check if the root is null

  let queue = [[root, 0]]; // Initialize the queue with the root node and its depth
  let ans = [];
  
  while (queue.length > 0) {
      let [node, depth] = queue.shift(); // Use shift() to remove the first element (FIFO)
      if (node) {
          ans[depth] = node.val; // Update the value at the current depth with the node's value
          if (node.left) queue.push([node.left, depth + 1]); // Then enqueue left child
          if (node.right) queue.push([node.right, depth + 1]); // Enqueue right child first
      }
  }
  
  return ans;
};