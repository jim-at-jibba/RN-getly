import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/home';
import SettingsScreen from '../screens/settings';

import colours from '../config/colours';

export const NavStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Get.ly'
      }
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings'
      }
    }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colours.primary
      }
    }
  }
);

export default NavStack;
