import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import colours from '../../config/colours';
import styles from './styles';

class AddFab extends Component {
  render() {
    return (
      <View style={styles.fabWrapper}>
        <Icon
          raised
          reverse
          name="add"
          size={26}
          color={colours.primary}
          iconStyle={styles.fab}
          onPress={() => console.log('Add Todo')}
        />
      </View>
    );
  }
}

export default AddFab;
