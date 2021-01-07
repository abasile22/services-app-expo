import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './components/Login';
import Home from './components/Home';

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
    screen: Home
  }

});

export default createAppContainer(AppNavigator);