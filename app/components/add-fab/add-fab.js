import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import colours from '../../config/colours';
import styles from './styles';

class AddFab extends Component {
  constructor() {
    super();

    this.handleFABPress = this.handleFABPress.bind(this);
  }

  handleFABPress = () => {
    this.props.navigate.navigate('NewRequest', {title: 'New'});
  };

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
          onPress={() => this.handleFABPress()}
        />
      </View>
    );
  }
}

export default AddFab;
