import { View, StyleSheet } from 'react-native';
import StyledText from '../../Text/StyledText';

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText big bold>
        Id: {props.id}
      </StyledText>
      <StyledText blue>FullName: {props.fullName}</StyledText>
      <StyledText bold>Description:{props.description}</StyledText>
      <StyledText blue>Language: {props.language}</StyledText>
      <StyledText small>Stars: {props.stargazersCount}</StyledText>
      <StyledText small>Forks: {props.forksCount}</StyledText>
      <StyledText small>Review: {props.reviewCount}</StyledText>
      <StyledText small>Rating: {props.ratingAverage}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RepositoryItem;
