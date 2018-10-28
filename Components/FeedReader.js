import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Theme from '../Themes/Default'



export default class Navigation extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
      <SafeAreaView style={styles.container}>
       <Text style={styles.text}>Feed Reader - We need a FlatList</Text>
      </SafeAreaView>
      )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.BaseColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Theme.TextColor
  },
  image: {
    width: 30,
    height: 44
  }
});
