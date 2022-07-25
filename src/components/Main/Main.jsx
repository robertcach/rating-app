import { View, Text } from 'react-native';
import RepositoryList from '../Repositories/RepositoryList/RepositoryList';
import AppBar from '../AppBar/AppBar';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
