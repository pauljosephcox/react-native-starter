import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Theme from '../Themes/Default'

import { DrawerItems } from 'react-navigation'


export default class Navigation extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../Assets/white-cross-crop.png')} style={styles.image} />
        </View>
        <View style={styles.itemsContainer}>

            <DrawerItems {...this.props} />
         
        </View>
      </SafeAreaView>
      )

  }

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
 },
 image: Theme.TheChurchCoLogo,
 logoContainer: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
 },
 itemsContainer: {
  flex: 2,
  flexDirection: 'column',
  justifyContent: 'flex-end',
 },
 itemWrap: {

  }
});
