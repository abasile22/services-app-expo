import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './components/Login';


class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }

}

const AppNavigator = createStackNavigator({

  Login: {
    screen: Login
  }

});

export default createAppContainer(AppNavigator);