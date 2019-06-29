import React from 'react';
import { Image, StyleSheet, Button, Text, View } from 'react-native';


export default class Header extends React.Component {
  

  render() {
    return (
      <View style={styles.header}>

                <Text>Header</Text>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  header: {
    // flex: 1,
    height: 75,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
  },
});



