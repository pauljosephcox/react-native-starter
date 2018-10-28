import React from 'react';
import { createDrawerNavigator, DrawerNavigator } from 'react-navigation';

import Theme from '../Themes/Default'
import Navigation from './Navigation'
import NavigationItem from './NavigationItem';

import HomeScreen from './HomeScreen';
import BlogScreen from './BlogScreen';
import SettingsScreen from './SettingsScreen';



export default AppStack = createDrawerNavigator(
  {
    HomeScreen:{
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: (props) => (<NavigationItem {...props} label="Home" icon="home" />)
      }
    },
    BlogScreen:{
      screen: BlogScreen,
      navigationOptions: {
        drawerLabel: (props) => (<NavigationItem {...props} label="Blog" icon="news" />)
      }
    },
    EventsScreen:{
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: (props) => (<NavigationItem {...props} label="Events" icon="calendar" />)
      }
    },
    PodcastScreen:{
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: (props) => (<NavigationItem {...props} label="Sermons" icon="mic" />)
      }
    },
    SettingsScreen:{
      screen: SettingsScreen,
      navigationOptions: {
        drawerLabel: (props) => (<NavigationItem {...props} label="Settings" icon="cog" />)
      }
    }
  },
  {
    initialRouteName: 'HomeScreen',
    drawerBackgroundColor: Theme.BaseColor,
    drawerLockMode: 'locked-closed',
    contentComponent: Navigation,
  }
);
