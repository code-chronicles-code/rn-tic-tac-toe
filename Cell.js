import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

const SIZE = 80;

function X() {
  return (
    <Svg height={SIZE} width={SIZE} viewBox="0 0 100 100">
      <Line
        x1="20"
        y1="20"
        x2="80"
        y2="80"
        stroke="navy"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <Line
        x1="80"
        y1="20"
        x2="20"
        y2="80"
        stroke="navy"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </Svg>
  );
}

function O() {
  return (
    <Svg height={SIZE} width={SIZE} viewBox="0 0 100 100">
      <Circle
        cx="50"
        cy="50"
        r="35"
        stroke="crimson"
        strokeWidth="8"
        fill="transparent"
      />
    </Svg>
  );
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

    console.error('Unexpected cell value!', cellValue);
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
    width: SIZE,
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
