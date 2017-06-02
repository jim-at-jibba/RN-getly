import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const Container = ({ children, passProps, list, form }) => {
  if (list === true) {
    return (
      <View style={styles.listWrapper} {...passProps}>
        {children}
      </View>
    );
  }

  if(form === true) {
    return (
      <View style={styles.formWrapper} {...passProps}>
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
