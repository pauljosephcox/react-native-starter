import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Theme from '../Themes/Default'


export default class LoadingScreen extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

    // TODO: Load data from storage.
    setTimeout(()=>{ this.props.navigation.navigate('AppStack'); },2000);

  }

  render(){
    return (
        <View style={styles.container}>
          <Image source={require('../Assets/white-cross-crop.png')} style={styles.image} />
        </View>
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
