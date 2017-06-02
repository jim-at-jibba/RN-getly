import { create } from 'react-native-platform-stylesheet';
import colours from '../../config/colours';

export default create({
  itemStyle: {
    height: 60,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colours.textSubtle,
    justifyContent: 'center'
  },

  textWrapper: {
    flexDirection: 'row'
  },
  textMethod: {
    fontWeight: 'bold',
    paddingRight: 10
  },
  itemMenu: {
    backgroundColor: colours.orange, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5
  }
});
