import { StyleSheet, Text, View } from 'react-native';

import getPlayerToMove from './getPlayerToMove';

export default function GameDescription({ isGameOver, moveCount, winner }) {
  const text = (() => {
    if (!isGameOver) {
      return `${getPlayerToMove(moveCount)} to move.`;
    }

    if (winner == null) {
      return 'Draw!';
    }

    return `${winner} wins in ${moveCount} move${moveCount === 1 ? '' : 's'}!`;
  })();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
