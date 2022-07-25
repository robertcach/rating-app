import { View, StyleSheet } from 'react-native';
import StyledText from '../../Text/StyledText';
import RepositoryStats from '../RepositoryStats/RepositoryStats';
import theme from '../../theme';

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText fontSize="subHeading" fontWeight="bold">
        {props.fullName}
      </StyledText>
      <StyledText>{props.description}</StyledText>
      <StyledText style={styles.language}>{props.language}</StyledText>
      <RepositoryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    alignSelf: 'flex-start',
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    overflow: 'hidden', // hace falta esta propiedad para que aparezca correctamente el borderRadius
  },
});

export default RepositoryItem;
