import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

import Colors from '../Themes/Colors';

import ExploitScreen from '../Containers/ExploitScreen';
import SearchScreen from '../Containers/SearchScreen';
import LaunchScreen from '../Containers/LaunchScreen';

import styles from './Styles/NavigationStyles'

const SearchExploitNavigation = StackNavigator({
  Search: {
    screen: SearchScreen,
  },
  Exploit: {
    screen: ExploitScreen,
  }
});

const PrimaryNav =  TabNavigator(
  {
    Home: {
      screen: LaunchScreen,
    },
    Search: {
      screen: SearchExploitNavigation,
    },
  },
  {
    headerMode: 'none',
    header: null,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);


export default PrimaryNav
