import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Cell({ cellValue, rowIndex, columnIndex, dispatch }) {
  const Container = cellValue == null ? TouchableOpacity : View;

  return (
    <Container
      style={styles.container}
      onPress={() => dispatch({ type: 'make-move', rowIndex, columnIndex })}
    >
      {cellValue != null && <Text style={styles.text}>{cellValue}</Text>}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 60,
  },
});
