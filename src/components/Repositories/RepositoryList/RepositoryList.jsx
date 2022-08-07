import { useEffect, useState } from 'react';
import { Text, FlatList } from 'react-native';
import RepositoryItem from '../RepositoryItem/RepositoryItem';

const RepositoryList = () => {
  const [repositories, setRepositories] = useState(null);

  const fetchRepositories = async () => {
    const response = await fetch('http://192.168.1.130:5000/api/repositories');
    const json = await response.json();
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const repositoriesNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={repositoriesNodes}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    ></FlatList>
  );
};

export default RepositoryList;
