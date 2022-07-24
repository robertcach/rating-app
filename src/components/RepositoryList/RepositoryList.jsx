import { View, Text } from 'react-native';
import repositories from '../../data/repositories';

const RepositoryList = () => {
  return (
    <View>
      {repositories.map((repo) => (
        <View key={repo.id}>
          <Text>{repo.fullName}</Text>
        </View>
      ))}
    </View>
  );
};

export default RepositoryList;
