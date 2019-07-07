import React from 'react';
import { Image, StyleSheet, Button, Text, View } from 'react-native';
import recipeId from '../data/recipesItem';
import Header from '../components/header';


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
    
    
    // }

render(){
    // navigation params
    const { navigation } = this.props;
    const recipeId = navigation.getParam('rid', 'NO-ID');



    return (
      <View>
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
        <Text style={styles.ingredient_items} key={number.toString()}>{number}</Text>
        )}
        <Text>Recipe ID:  {JSON.stringify(recipeId)}</Text>
        </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
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



