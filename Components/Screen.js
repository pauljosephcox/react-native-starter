import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar
} from 'react-native';
import Theme from '../Themes/Default'

import Hamburger from './Hamburger';
export default class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }


  render(){

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        {this.props.children}
        <Hamburger navigation={this.props.navigation} style={styles.nav} />
      </SafeAreaView>
      )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.BaseColor,
  },
  nav: {
    position: 'absolute',
    bottom: Theme.Headings.one,
    right: Theme.Headings.one
  }
});
