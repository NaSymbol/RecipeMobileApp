import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import console  from 'console';
import ItemScreen from './screens/items.screens';
import ListScreen from './screens/list.screens';
import { createStackNavigator, createAppContainer } from "react-navigation";


export default function App() {
  console.log("hello andy");
  return (
    <View style={styles.container}>
      
      {/* <ItemScreen/> */}
      <ListScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
