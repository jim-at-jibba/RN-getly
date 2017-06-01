import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/home';

import colours from '../config/colours';

export const NavStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Title'
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
