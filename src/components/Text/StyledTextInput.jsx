import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
});

const StyledTextInput = ({ style = {}, ...props }) => {
  const inputStyle = {
    ...styles.textInput,
    ...style,
  };

  return <TextInput style={inputStyle} {...props} />;
};

export default StyledTextInput;
