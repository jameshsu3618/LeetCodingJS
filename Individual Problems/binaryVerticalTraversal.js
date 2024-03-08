
//BFS
var verticalOrder = function(root) {
  if (!root) return [];
  let map = new Map();
  let queue = [[root, 0]];

  while (queue.length > 0) {
      let [node, col] = queue.shift();
      if (!node) continue;

      let val = node.val;
      if (map.has(col)) {
          map.get(col).push(val);
      } else {
          map.set(col, [val]);
      }
      
      queue.push([node.left, col-1]);
      queue.push([node.right, col+1]);

  }
  return Array.from(map.keys()).sort((a, b)=> a-b).map((col)=>map.get(col));
};

// without sorting
var verticalOrder = function(root) {
  if (!root) return [];
  let map = new Map();
  let queue = [[root, 0]];
  let minCol = 0;
  let maxCol = 0;
  let result = [];

  while (queue.length > 0) {
      let [node, col] = queue.shift();
      if (node !== null) {
          if (!map.has(col)) {
              map.set(col, []);
          }
          map.get(col).push(node.val);

          minCol = Math.min(minCol, col);
          maxCol = Math.max(maxCol, col);

          queue.push([node.left , col - 1]);
          queue.push([node.right, col + 1]);
      }
  }

  for (let i = minCol; i <= maxCol; i++){
      result.push(map.get(i));
  }
  return result;
};

//DFS
var verticalOrder = function(root) {
  if (!root) return [];

  let map = new Map();

  function DFS(node, row, col) {
      if (!node) return;
      let val = node.val;

      if (!map.has(col)) {
          map.set(col, []);
      }
      map.get(col).push({row, val});

      DFS(node.left, row + 1, col - 1);
      DFS(node.right, row + 1, col + 1);
  }

  DFS(root, 0, 0);

 let sortedCol = Array.from(map.keys()).sort((a, b) => a-b)
 return sortedCol.map((col) => {
      return map.get(col).sort((a,b)=> a.row - b.row).map((item)=> item.val);
  });
  
};