import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const Container = ({ children, passProps, list }) => {
  if (list === true) {
    return (
      <View style={styles.listWrapper} {...passProps}>
        {children}
      </View>
    );
  }

  return (
    <View style={styles.wrapper} {...passProps}>
      {children}
    </View>
  );
};

export default Container;
