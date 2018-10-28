import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';

import { connect } from 'react-redux'
import { getBlogs } from '../Actions/Blogs'

import Theme from '../Themes/Default'

import Screen from './Screen';
import FeedReader from './FeedReader';


class BlogScreen extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

    this.props.getBlogs(this.props.settings.site);

  }


  render(){
    return (
        <Screen navigation={this.props.navigation}>
          <FeedReader {...this.props} />
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
  }
});

const mapStateToProps = (state) => {
  return {
    settings: state.Settings,
    blogs: state.Blogs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: (site) => { dispatch(getBlogs(site))},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogScreen)
