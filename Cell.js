import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function X() {
  return <Text style={[styles.text, { color: 'navy' }]}>X</Text>;
}

function O() {
  return <Text style={[styles.text, { color: 'crimson' }]}>O</Text>;
}

export default function Cell({ cellValue, onPress }) {
  const Container = onPress != null ? TouchableOpacity : View;

  const symbol = (() => {
    switch (cellValue) {
      case 'X':
        return <X />;
      case 'O':
        return <O />;
      case null:
        return null;
    }

    console.error('Unexpected cell value!');
    return null;
  })();

  return (
    <Container style={styles.container} onPress={onPress}>
      {symbol}
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
    fontSize: 60,
  },
});
