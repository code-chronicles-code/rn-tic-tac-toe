import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useReducer } from 'react';

import make2dArray from './make2dArray';
import Board from './Board';
import copy2dArray from './copy2dArray';
import computeTicTacToeResult from './computeTicTacToeResult';
import GameDescription from './GameDescription';
import getPlayerToMove from './getPlayerToMove';

const BOARD_SIZE = 3;

function reducer(state, action) {
  switch (action.type) {
    case 'make-move': {
      if (state.isGameOver) {
        return state;
      }

      const newBoard = copy2dArray(state.board);
      newBoard[action.rowIndex][action.columnIndex] = getPlayerToMove(
        state.moveCount,
      );

      const { isGameOver, winner } = computeTicTacToeResult(newBoard);

      return {
        ...state,
        board: newBoard,
        moveCount: state.moveCount + 1,
        isGameOver,
        winner,
      };
    }

    case 'new-game': {
      return makeInitialState();
    }
  }

  return state;
}

function makeInitialState() {
  return {
    board: make2dArray(BOARD_SIZE, BOARD_SIZE, null),
    moveCount: 0,
    isGameOver: false,
    winner: null,
  };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitialState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <Board
        board={state.board}
        isGameOver={state.isGameOver}
        dispatch={dispatch}
      />
      <GameDescription
        winner={state.winner}
        isGameOver={state.isGameOver}
        moveCount={state.moveCount}
      />
      {state.isGameOver && (
        <TouchableOpacity
          onPress={() => dispatch({ type: 'new-game' })}
          style={styles.newGameButton}
        >
          <Text style={styles.newGameButtonText}>New Game</Text>
        </TouchableOpacity>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  newGameButton: {
    position: 'absolute',
    bottom: 100,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'blue',
  },
  newGameButtonText: {
    fontSize: 20,
    color: 'white',
  },
  title: {
    fontSize: 24,
  },
});
