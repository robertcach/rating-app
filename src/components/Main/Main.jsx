import { Text, View } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from '../RepositoryList/RepositoryList';

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <RepositoryList />
    </View>
  );
};

export default Main;
