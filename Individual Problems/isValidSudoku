/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

//

function isValidSudoku(board) {
    const N = 9;

    // Initialize arrays to record the status
    let rows = Array.from({ length: N }, () => new Array(N).fill(0));
    let cols = Array.from({ length: N }, () => new Array(N).fill(0));
    let boxes = Array.from({ length: N }, () => new Array(N).fill(0));

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            // Skip if the cell is empty
            if (board[r][c] === '.') {
                continue;
            }

            let pos = board[r][c] - '1';

            // Calculate the index for the box
            let idx = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Check the row, column, and box for duplication
            if (rows[r][pos] === 1 || cols[c][pos] === 1 || boxes[idx][pos] === 1) {
                return false;
            }

            // Mark the presence of the number in the row, column, and box
            rows[r][pos] = 1;
            cols[c][pos] = 1;
            boxes[idx][pos] = 1;
        }
    }

    return true;
}

//using sets

var isValidSudokuSet = function(board) {
  let rowSets = Array.from({ length: 9 }, () => new Set());
  let colSets = Array.from({ length: 9 }, () => new Set());
  let squareSets = Array.from({ length: 9 }, () => new Set());

  for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
          let value = board[row][col];
          if (value === '.') continue;

          let squareIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

          if (rowSets[row].has(value) || colSets[col].has(value) || squareSets[squareIndex].has(value)) {
              return false;
          }

          rowSets[row].add(value);
          colSets[col].add(value);
          squareSets[squareIndex].add(value);
      }
  }
  
  return true;
};