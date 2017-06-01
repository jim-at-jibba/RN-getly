import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const Container = ({ children, passProps }) => {
  return (
    <View style={styles.wrapper} {...passProps}>
      {children}
    </View>
  );
};

export default Container;
