import React from 'react';
import { View, Text } from 'react-native';
import RepositoryList from '../Repositories/RepositoryList/RepositoryList';
import AppBar from '../AppBar/AppBar';
import { Switch, Route } from 'react-router-native';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin">
          <Text>Working on it</Text>
        </Route>
      </Switch>
    </View>
  );
};

export default Main;
