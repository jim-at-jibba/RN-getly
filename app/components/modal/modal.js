import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';

const ModalContainer = ({isVisible, children}) => (
  <View style={styles.container}>
    <Modal isVisible={isVisible}>
      <View style={styles.modalContent}>
        {children}  
      </View>
    </Modal>
  </View>
);

export default ModalContainer;
