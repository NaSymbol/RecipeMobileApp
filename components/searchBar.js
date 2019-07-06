import React from 'react';
import { TextInput, Image, StyleSheet, Button, Text, View } from 'react-native';


export default class SearchBar extends React.Component {
  

  render() {
    return (
      <View style={styles.search}>

                <Text>Icon</Text>
                <TextInput
        style={styles.searchbar}
       
      />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  search: {
    position: 'relative',
    // zIndex: 3,
    // color: 'green',
    // flex: 1,
    // width: 500,
    height: 75,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
    // position: 'fixed',
    bottom: 0,
  },
  searchbar: {
    flex: 1, height: 40, borderColor: 'gray', borderWidth: 1,
    backgroundColor: 'white',
  },

});



