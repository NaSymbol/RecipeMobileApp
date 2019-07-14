import React from 'react';
import { Image, StyleSheet, Button, Text, View } from 'react-native';
import logo from '../assets/logo.svg';
import { RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3 } from 'expo-av/build/Audio';

export default class Header extends React.Component {
  

  render() {
    return (
      <View style={styles.header}>
                <Image source={require('../assets/logo.png')} />

      </View>
    );
  }
}



const styles = StyleSheet.create({
  header: {
    // flex: 1,
    height: 75,
    backgroundColor: '#B8D7FA',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 25,
  },
});



