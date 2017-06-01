import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/home';

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
    headerMode: 'screen'
  }
);

export default NavStack;
