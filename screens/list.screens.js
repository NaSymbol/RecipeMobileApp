import React from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Image, StyleSheet, Button, Text, View } from 'react-native';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
// import console = require('console');
import recipeList from '../data/recipe';

export default class ListScreen extends React.Component {
  static navigationOptions = { header: null }
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            searchQ: '',
            recipe: recipeList,
            recipeArray: recipeList,
            limitReached: false
        }
        this.onSubmitChange = this.onSubmitChange.bind(this);

    }
    componentDidMount(){
      console.log('this is inside componentdidMount: ' + this.state.searchQ);
      const url = 'https://www.food2fork.com/api/search?key=595d1e2252464ece28e41c9a36bca770';
      return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          recipeArray: responseJson.recipes
        }, function(){
          // console.log(this.state.recipeArray);
        });

      })
      .catch((error) =>{
        console.error(error);
      });
    
    }
    // api call function
    onAPICall(searchTerm){
      // const url2 = 'https://www.food2fork.com/api/search?key=595d1e2252464ece28e41c9a36bca770&q=' + this.state.searchQ;
      const url2 = 'https://www.food2fork.com/api/search?key=302447178e495448bdc7cf0219101ad4&q=' + searchTerm;

      console.log('this is inside onAPIcall');

      return fetch(url2)
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.error){
          this.setState({limitReached: true})
        }
        this.setState({
          isLoading: false,
          recipeArray: responseJson.recipes
        }, function(){
          // console.log(this.state.recipeArray);
        });

      })
      .catch((error) =>{
        console.error(error);
      });
    }
    // onSubmitChange
    onSubmitChange(searchTerm) {
        // this.setState({searchQ: q})
        console.log('this is insdie onSubmitChange: ');
        this.onAPICall(searchTerm);
    }

// render the return from API which is an array
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }


    console.log('this is inside render() : ' + this.state.searchQ);

    if(this.state.limitReached){
      return (
        <View>
          <Text>API Call Limit Reached</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
       
        {/* display each  */}
        <FlatList
          data={this.state.recipeArray}
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
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 24
    
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



