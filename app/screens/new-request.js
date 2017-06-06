import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, CheckBox, Button } from 'react-native-elements';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

import Container from '../components/container';
import colours from '../config/colours';
import RequestService from '../data/services/requestService';
import RequestModel from '../data/models/requestModel';

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
      methods: [
        { label: 'GET', value: 'GET' },
        { label: 'POST', value: 'POST' },
        { label: 'PUT', value: 'PUT' },
        { label: 'DELETE', value: 'DELETE' }
      ],
      request: {
        title: '',
        url: '',
        method: 'GET',
        showResponse: true
      },
      methodIndex: 0,
      errors: []
    };

    this.methodSelected = this.methodSelected.bind(this);
    this.saveRequest = this.saveRequest.bind(this);
  }

  methodSelected(method, index) {
    this.setState({
      methodIndex: index,
      request: { ...this.state.request, method }
    });
  }

  saveRequest() {
    const { title, url, method } = this.state.request;
    console.log('Clicked', title, url, method);
    let errors = [];

    if (title === '') {
      console.log('Empty Title');
      errors.push({ title: 'You must provide a title' });
    }

    if (url === '') {
      console.log('Empty url');
      errors.push({ url: 'You must provide a url' });
    }

    if (errors.length === 0) {
      console.log('Saving', this.state.request);
      const {title, url, method, showResponse } = this.state.request;
      RequestService.save(new RequestModel(title, url, method, showResponse));
      this.props.navigation.navigate('HomeScreen');
    } else {
      this.setState({ errors });
      return;
    }
  }

  render() {
    console.log('STATE:', this.state);
    return (
      <Container form>
        <FormLabel>Title</FormLabel>
        <FormInput 
          value={this.state.request.title}
          onChangeText={title => {
            this.setState({
              request: { ...this.state.request, title }
            });
          }}
        />

        <FormLabel>URL</FormLabel>
        <FormInput
          autoCapitalize='none'
          autpCorrect='false'
          value={this.state.request.url}
          onChangeText={url => {
            this.setState({
              request: { ...this.state.request, url }
            });
          }}
        />

        <View>
          <FormLabel>Method</FormLabel>
          <RadioForm formHorizontal={true} style={styles.radioButtons}>
            {this.state.methods.map((obj, i) => {
              return (
                <RadioButton labelHorizontal={true} key={i}>
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={this.state.methodIndex === i}
                    onPress={() => this.methodSelected(obj.value, i)}
                    buttonInnerColor={colours.primary}
                    buttonOuterColor={
                      this.state.methodIndex === i
                        ? colours.primary
                        : colours.secondaryText
                    }
                    buttonSize={15}
                    buttonStyle={{}}
                    buttonWrapStyle={{ marginLeft: 10 }}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={() => this.methodSelected(obj.value, i)}
                    labelStyle={{ fontSize: 12, color: colours.secondaryText }}
                    labelWrapStyle={{}}
                  />
                </RadioButton>
              );
            })}
          </RadioForm>
        </View>

        <View>
          <CheckBox
            title="Show request response?"
            checked={this.state.request.showResponse}
            containerStyle={styles.checkBoxContainer}
            checkedColor={colours.primary}
            onPress={() => {
              let showResponse = !this.state.request.showResponse;
              this.setState({
                request: { ...this.state.request, showResponse }
              });
            }}
          />
        </View>
        <Button
          large
          iconRight
          backgroundColor={colours.primary}
          buttonStyle={styles.buttonStyle}
          icon={{ name: 'insert-link' }}
          title="Save"
          onPress={() => this.saveRequest()}
        />
      </Container>
    );
  }
}

const styles = {
  radioButtons: {
    marginTop: 15,
    marginLeft: 8
  },
  checkBoxContainer: {
    backgroundColor: 'transparent'
  },
  buttonStyle: {
    marginTop: 100,
    backgroundColor: colours.primary
  }
};

export default NewRequestScreen;
