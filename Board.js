import { StyleSheet, View } from 'react-native';

import Row from './Row';

export default function Board({ board, dispatch, isGameOver }) {
  return (
    <View style={styles.container}>
      {board.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          cellValues={row}
          dispatch={dispatch}
          isGameOver={isGameOver}
          rowIndex={rowIndex}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    gap: 8,
    padding: 8,
    borderRadius: 8,
  },
});
