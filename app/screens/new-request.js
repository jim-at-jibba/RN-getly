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
        method: '',
        showReponse: true
      },
      methodIndex: 0
    };

    this.methodSelected = this.methodSelected.bind(this);
    this.saveRequest = this.saveRequest.bind(this);
  }

  methodSelected(value, index) {
    this.setState({
      methodIndex: index,
      request: { ...this.state.request, value }
    });
  }

  saveRequest() {
    const {title, url, method } = this.state.request;

    if(title === '' ) {
      let errors = [];
      errors.push[{title: 'You must provide a title'}]
      this.setState = {
        errors: []
      }
    }
  }

  render() {
    console.log('STATE:', this.state);
    return (
      <Container form>
        <FormLabel>Title</FormLabel>
        <FormInput />

        <FormLabel>URL</FormLabel>
        <FormInput />

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
              console.log('SHOW', showResponse);
              this.setState({
                request: { ...this.state.request, showResponse }
              });
              console.log('Clicked Stae', this.state.request);
            }}
          />
        </View>
        <Button
          large
          iconRight
          backgroundColor={colours.primary}
          buttonStyle={styles.buttonStyle}
          icon={{ name: 'insert-link',  }}
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
