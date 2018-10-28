import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Theme from '../Themes/Default'

const Hamburger = ( props ) => {
  return (
    <TouchableOpacity onPress={props.navigation.openDrawer} style={props.style}>
       <Entypo name="menu" style={styles.icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  icon: {
    color: Theme.TextColor,
    fontSize: Theme.Headings.one*1.25,
  },

});

export default Hamburger
