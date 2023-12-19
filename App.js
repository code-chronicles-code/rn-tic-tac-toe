import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useReducer } from 'react';

import make2dArray from './make2dArray';
import Board from './Board';
import copy2dArray from './copy2dArray';

const BOARD_SIZE = 3;

function reducer(state, action) {
  switch (action.type) {
    case 'make-move': {
      const newBoard = copy2dArray(state.board);
      newBoard[action.rowIndex][action.columnIndex] =
        state.moveCount % 2 === 0 ? 'X' : 'O';

      return {
        ...state,
        board: newBoard,
        moveCount: state.moveCount + 1,
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
  };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitialState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic-Tac-Toe</Text>
      <Board board={state.board} dispatch={dispatch} />
      {state.moveCount === BOARD_SIZE ** 2 ? (
        <Button
          title="New Game"
          onPress={() => dispatch({ type: 'new-game' })}
        />
      ) : null}
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
