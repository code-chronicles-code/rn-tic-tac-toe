import { StyleSheet, View } from 'react-native';

import Cell from './Cell';

export default function Row({ cellValues, isGameOver, dispatch, rowIndex }) {
  return (
    <View style={styles.container}>
      {cellValues.map((cellValue, columnIndex) => (
        <Cell
          key={columnIndex}
          cellValue={cellValue}
          onPress={
            isGameOver
              ? null
              : () => dispatch({ type: 'make-move', rowIndex, columnIndex })
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
});
