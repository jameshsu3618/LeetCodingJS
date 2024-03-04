/* 
**Problem Statement:**

On an infinite chessboard with coordinates extending from negative infinity to positive infinity, there is a knight positioned at square [0, 0]. 

The knight can make eight possible moves; each move consists of traveling two squares in one of the four cardinal directions (up, down, left, or right), followed by one square in a perpendicular (orthogonal) direction. This pattern allows the knight to access various positions on the chessboard, hopping in an L-shape.

**Objective:**

Determine the minimum number of steps the knight requires to reach a specified square [x, y] on the chessboard. The problem guarantees that a solution exists.
*/

var minKnightMoves = function(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);

  let directions = [[-2, -1], [-2, 1], [-1, -2], [1, -2], [2, -1], [2, 1], [-1, 2], [1, 2]];
  let queue = [[0, 0]];
  let visited = new Set('0,0');  // Acts like a memoization cache
  let steps = 0;

  while (queue.length) {
      let nextLevel = [];
      for (let [currX, currY] of queue) {
          if (currX === x && currY === y) {
              return steps;
          }

          for (let [dx, dy] of directions) {
              let newX = currX + dx;
              let newY = currY + dy;

              if (newX < -2 || newY < -2) continue;

              let newCoords = `${newX},${newY}`;
              if (!visited.has(newCoords)) {
                  visited.add(newCoords);  // Memoize by marking this position as visited
                  nextLevel.push([newX, newY]);
              }
          }
      }
      queue = nextLevel;
      steps++;
  }

  return -1;  // Target not reachable (theoretically shouldn't happen in this problem)
};