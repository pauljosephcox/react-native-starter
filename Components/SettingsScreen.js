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
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Theme from '../Themes/Default'


import { getAvailableSites, onSelectSite } from '../Actions/Settings'

import Screen from './Screen';


class SettingsScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      results: [],
      search: ''
    }
  }

  componentDidMount(){

    this.props.getAvailableSites();

  }

  onSelect(item){
    this.props.onSelectSite(item)
    this.props.navigation.navigate('HomeScreen');
  }

  _keyExtractor = (item,index) => item.site_id;

  onSearchType(text){

    // Guard
    if(text.length <= 0) { this.setState({results:[]}); return; }

    // Set The State
    text = text.toLowerCase();

    // Filter List
    let results = this.props.settings.sites.filter((item)=>{

      let name = item.blogname.toLowerCase();
      if(name.indexOf(text) > -1) return item;

    })

    this.setState({
      search:text,
      results:results
    })

  }

  renderHeader = () => {
    return (
       <View>
        <TextInput
          placeholder="Search..."
          onChangeText={(text) => this.onSearchType(text)}
          value={this.state.search}
         />
       </View>
    );
  }

  renderItem(item){

    let brandingStyles = {};
    // if(item.thechurchsite_navbar_color) brandingStyles.backgroundColor = item.thechurchsite_navbar_color;

    return (
      <TouchableOpacity style={[styles.row,brandingStyles]} onPress={() => this.onSelect(item)}>
        <Text style={styles.rowText}>{item.blogname}</Text>
        <Text style={styles.rowText}>{(item.options_contact_full_address) ? item.options_contact_full_address.address : ''}</Text>
      </TouchableOpacity>
    )
  }



  render(){

    if(this.props.settings && this.props.settings.sites.length <= 0){
      return(
        <Screen navigation={this.props.navigation}>
          <View style={styles.container}>
            <ActivityIndicator />
         </View>
        </Screen>
      )
    }



    return (
      <Screen navigation={this.props.navigation}>
        <View style={styles.container}>
          <FlatList
            data={this.state.results}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={this._keyExtractor}
            ListHeaderComponent={this.renderHeader}
          />
       </View>
      </Screen>
      )

  }

}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.BaseColor,
  },
  text: {
    color: Theme.TextColor
  },
  image: {
    width: 30,
    height: 44
  },
  row: {
    paddingVertical:20,
    paddingHorizontal: 20
  },
  rowText: {
    color: Theme.TextColor,
    fontSize: Theme.Headings.two
  },
});


const mapStateToProps = (state) => {
  return {
    settings: state.Settings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAvailableSites: () => { dispatch(getAvailableSites())},
    onSelectSite: (site) => { dispatch(onSelectSite(site))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingsScreen)
