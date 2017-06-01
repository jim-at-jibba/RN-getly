import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import colours from '../../config/colours';

const SettingsButton = ({navigate}) => {
  return (
    <View style={styles.iconStyles}>
      <Icon
        name="settings"
        size={26}
        color={colours.defaultText}
        onPress={() => {
          console.log('Navigating');
          navigate('SettingsScreen')}} 
      />
    </View>    
    
  );
};

export default SettingsButton;
