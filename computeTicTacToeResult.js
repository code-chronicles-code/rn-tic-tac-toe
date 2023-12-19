const DIRECTIONS = [
  // Vertical (down)
  [1, 0],

  // Horizontal (right)
  [0, 1],

  // Diagonal 1 (down and right)
  [1, 1],

  // Diagonal 2 (down and left)
  [1, -1],
];

export default function computeTicTacToeResult(board) {
  const n = board.length;

  let hasEmptyCells = false;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      const player = board[i][j];
      if (player == null) {
        hasEmptyCells = true;
        continue;
      }

      for (const [di, dj] of DIRECTIONS) {
        let count = 1;
        let ci = i;
        let cj = j;

        while (true) {
          ci += di;
          cj += dj;
          if (
            ci < 0 ||
            cj < 0 ||
            ci >= n ||
            cj >= n ||
            board[ci][cj] !== player
          ) {
            break;
          }

          ++count;
        }

        if (count >= n) {
          return { isGameOver: true, winner: player };
        }
      }
    }
  }

  return { isGameOver: !hasEmptyCells, winner: null };
}
