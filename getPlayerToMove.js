const PLAYERS = ['X', 'O'];

export default function getPlayerToMove(moveCount) {
  return PLAYERS[moveCount % PLAYERS.length];
}
