import React from 'react';
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import Theme from '../Themes/Default'

import Screen from './Screen';
import Hamburger from './Hamburger';


class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){

    if(!this.props.settings.site) this.props.navigation.navigate('SettingsScreen');

  }




  render(){

    if(!this.props.settings){
      return (
        <Screen navigation={this.props.navigation}>
          <View style={styles.container}>
            <ActivityIndicator/>
         </View>
        </Screen>
      )
    }


    return (
      <Screen navigation={this.props.navigation}>
        <View style={styles.container}>
          <Text style={styles.text}>Home | {this.props.settings.site.blogname}</Text>
       </View>
      </Screen>
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

const mapStateToProps = (state) => {
  return {
    settings: state.Settings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)
