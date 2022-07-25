import { View, Image, StyleSheet } from 'react-native';
import StyledText from '../../Text/StyledText';
import theme from '../../theme';

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        {/* "flex: 1" para que ocupe todo el espacio y haga saltos de línea si fuera necesario */}
        <StyledText fontWeight="bold">{fullName}</StyledText>
        <StyledText color="secondary">{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  language: {
    alignSelf: 'flex-start',
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    overflow: 'hidden', // hace falta esta propiedad para que aparezca correctamente el borderRadius
    marginBottom: 4,
    marginTop: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItemHeader;
