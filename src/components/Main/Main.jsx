import React from 'react';
import { View } from 'react-native';
import RepositoryList from '../Repositories/RepositoryList/RepositoryList';
import AppBar from '../AppBar/AppBar';
import { Switch, Route } from 'react-router-native';
import LoginPage from '../LoginPage/LoginPage';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin">
          <LoginPage />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;
