import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Theme from '../Themes/Default'


export default class NavigationItem extends React.Component {

  constructor(props){
    super(props);

  }



  render(){

    return (
      <View style={[styles.container]}>
        <Entypo name={this.props.icon} style={styles.icon} />
        <Text style={styles.text}>{this.props.label}</Text>
      </View>
      )

  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: Theme.Headings.two,
    paddingHorizontal: 20,
    width: '100%'
  },
  icon: {
    color: Theme.TextColor,
    fontSize: Theme.Headings.two,
    marginRight: Theme.Headings.two
  },
  text: {
    color: Theme.TextColor,
    fontSize: Theme.Headings.two
  }
});
