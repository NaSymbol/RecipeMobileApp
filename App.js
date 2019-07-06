import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import console  from 'console';
import ItemScreen from './screens/items.screens';
import ListScreen from './screens/list.screens';
import { createStackNavigator, createAppContainer } from "react-navigation";



const RootStack = createStackNavigator({
    Home: ListScreen,
    Item: ItemScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
