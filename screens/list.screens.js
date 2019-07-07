import React from 'react';
import { TouchableOpacity, FlatList, Image, StyleSheet, Button, Text, View } from 'react-native';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
// import console = require('console');
import recipeList from '../data/recipe';

export default class ListScreen extends React.Component {
  static navigationOptions = { header: null }
    constructor(props){
        super(props);
        this.state = {
            searchQ: '',
            recipe: recipeList
        }
        this.onSubmitChange = this.onSubmitChange.bind(this);

    }
    // componentDidMount(){

    
    // }
    // onSubmitChange
    onSubmitChange(q) {
        this.setState({searchQ: q})
    }

// render the return from API which is an array
  render() {

    console.log(this.state.searchQ);
    return (
      <View style={{flex:1}}>
       
        {/* display each  */}
        <FlatList
          data={this.state.recipe}
    ListHeaderComponent={<SearchBar searchQ={this.onSubmitChange} /> }
          // ListFooterComponent={SearchBar}
          keyExtractor={(item, index) => item.recipe_id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item', {
              rid: item.recipe_id,
            })}><View style={styles.item}>
               <Image
                style={{ width: 500, height: 115 }}
                source={{ uri: item.image_url }}
              />
              <View style={styles.heading}>
              <Text style={styles.text}>{item.title}</Text>
              </View>
            </View>
            </TouchableOpacity>
          )}
        />
             {/* <SearchBar/>   */}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    marginEnd: 50,
  },
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});



