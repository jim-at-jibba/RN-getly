import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';

import Container from '../components/container';

class NewRequestScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: state.params.title
      // headerleft: <SettingsButton navigate={navigation.navigate} />
    };
  };

  constructor() {
    super();

    this.state = {
      checked: true
    };
  }

  render() {
    return (
      <Container form>
        <FormLabel>Title</FormLabel>
        <FormInput />

        <FormLabel>URL</FormLabel>
        <FormInput />

        <View>
          <FormLabel>Method</FormLabel>
          <ModalDropdown options={['option 1', 'option 2']}/>
        </View>
      </Container>
    );
  }
}

export default NewRequestScreen;
