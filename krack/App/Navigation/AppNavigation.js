import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Search: {
      screen: SearchExploitNavigation,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-search' : 'ios-search-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
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
