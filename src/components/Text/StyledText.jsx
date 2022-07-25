import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: 'grey',
  },
  bold: {
    fontWeight: 'bold',
  },
  blue: {
    color: 'blue',
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 10,
  },
});

const StyledText = ({ blue, bold, children, big, small }) => {
  const textStyles = [
    styles.text, // estilo que está siempre. Estilo base.
    bold && styles.bold, // si tiene la prop "blue" utiliza los estilos de styles.blue
    blue && styles.blue,
    big && styles.big,
    small && styles.small,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

export default StyledText;
