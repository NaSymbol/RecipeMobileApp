import React from 'react';
import {Image, StyleSheet, Button, Text, View } from 'react-native';
import recipeId from '../data/recipesItem';
import Header from '../components/header';
import { ScrollView } from 'react-native-gesture-handler';


export default class ItemScreen extends React.Component {
    static navigationOptions = { header: null }
    constructor(props){
        super(props);
        this.state = {
            rid: 35382, 
            recipe: recipeId
        };
    
    }

    // fetch the food2fork api
    // componentDidMount(){
    //    // navigation params
    //    const { navigation } = this.props;
    //    const recipeTag = navigation.getParam('rid', 'NO-ID');
    //    const key = '302447178e495448bdc7cf0219101ad4';
    //    console.log(recipeTag);
    //    const url = 'https://www.food2fork.com/api/get?key=' + key + '&rId=' + recipeTag;
    //    console.log(url);
    //   return fetch(url)
    //   .then((response) => response.json())
    //   .then((responseJson) => {

    //     this.setState({
    //       recipe: responseJson.recipe,
    //     }, function(){
    //           // console.log(this.state.recipe);
    //     });

    //   })
    //   .catch((error) =>{
    //     console.error(error);
    //   });
    
    // }

render(){
         

    return (
      <ScrollView style={styles.container}>
        <Header />
        <Text style={styles.heading}>{this.state.recipe.title}</Text>
        <Image
                style={{ width: 500, height: 200 }}
                source={{ uri: this.state.recipe.image_url }}
        />
        <View style={styles.ingredients}>
        <Text style={styles.ingredient_heading}>Ingredients</Text>
        {/* loop for ingredients with key */}
        {this.state.recipe.ingredients.map( (number) =>
        <Text style={styles.ingredient_items} key={Math.random().toString()}>{number}</Text>
        )}
        {/* <Text>Recipe ID:  {JSON.stringify(recipeId)}</Text> */}
        </View>

      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {



  },
  heading: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20
  },
  ingredients: {
    padding: 15
  },
  ingredient_heading:{
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5
  },
  ingredient_items: {
    marginTop: 10
  }
});



