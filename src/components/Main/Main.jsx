import { View, Text } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from '../Repositories/RepositoryList/RepositoryList';

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, paddingTop: 10 }}>
      <RepositoryList />
    </View>
  );
};

export default Main;
