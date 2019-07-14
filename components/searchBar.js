import React from 'react';
import { TextInput, Image, StyleSheet, Button, Text, View } from 'react-native';
// import {Icon } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {text: 'hello andy'};
    this.onSubmitEdit = this.onSubmitEdit.bind(this);
  }
  
  onSubmitEdit = (data) => {
    // whatever you want to do on submit
    // this.setState({text: data});
    // console.log("onsubmitedit");
    this.props.searchQ(data);
  }


  render() {
    // console.log(this.state.text);

    return (
      <View style={styles.search}>
                <TextInput
                // onSubmitEditing={(text)=> this.setState({text})}
                onSubmitEditing={(event) => this.onSubmitEdit(event.nativeEvent.text)}
                style={styles.searchbar}
      />
              {/* <Icon name='search1' /> */}
                {/* Icon for Search */}
                {/* <Text style={styles.Icon}>ICON</Text> */}
                <Icon name="search"  style={styles.icon}/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  search: {
    // position: 'relative',
    // zIndex: 3,
    // color: 'green',
    // flex: 1,
    // width: 500,
    height: 60,
    backgroundColor: '#FFCF7A',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
    // position: 'fixed',
    // bottom: 0,
    flexDirection: 'row',
    padding: 15,
  },
  icon: {
    flex:1,
    height: 40,
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 5

  },
  searchbar: {
    flex: 20, 
    height: 40, 
    borderColor: 'white', 
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5 ,
  },

});



