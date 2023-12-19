import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useReducer } from 'react';

import make2dArray from './make2dArray';
import Board from './Board';
import copy2dArray from './copy2dArray';

function reducer(state, action) {
  switch (action.type) {
    case 'make-move': {
      const newBoard = copy2dArray(state.board);
      newBoard[action.rowIndex][action.columnIndex] = state.playerToMove;

      return {
        ...state,
        board: newBoard,
        playerToMove: state.playerToMove === 'X' ? 'O' : 'X',
      };
    }
  }

  return state;
}

function makeInitialState() {
  return {
    board: make2dArray(3, 3, null),
    playerToMove: 'X',
  };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitialState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <Board board={state.board} dispatch={dispatch} />
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
  title: {
    fontSize: 24,
  },
});
