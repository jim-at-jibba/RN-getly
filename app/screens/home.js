import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { List, Button, Text } from 'react-native-elements';
import { ListView } from 'realm/react-native';
import axios from 'axios';

import Container from '../components/container';
import SettingsButton from '../components/settings-button';
import AddFab from '../components/add-fab';
import ModalContainer from '../components/modal';

import RequestItem from '../components/request-item';
import RequestService from '../data/services/requestService';

import config from '../config/config';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <SettingsButton navigate={navigation.navigate} />
    };
  };

  getState() {
    console.log('Initialising state');
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    let requests = RequestService.findAll();
    return {
      requests,
      // dataSource: ds.cloneWithRows(requests),
      isModalVisible: false,
      response: {
        data: {},
        headers: {},
        status: null
      }
    };
  }

  constructor() {
    super();

    this.state = this.getState();

    this.deleteRequest = this.deleteRequest.bind(this);
    this.editRequest = this.editRequest.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderModalContent = this.renderModalContent.bind(this);
  }

  sendRequest(method, url, showResponse) {
    console.log(showResponse);
    axios({
      method,
      url
    })
      .then(response => {
        if (config.DEV) console.log('Response', response);
        this.setState({ response });

        if (showResponse) {
          this.setState({ isModalVisible: true });
        }
      })
      .catch(e => console.log('Error:', e));
  }

  deleteRequest(id) {
    if (config.DEV) console.log(`Deleting request with id: ${id}`);
    Alert.alert(
      'Warning!!',
      'Are you sure you want to delete this request item?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
        {
          text: 'OK',
          onPress: () => {
            RequestService.deleteOne(id);
            console.log('Refreshing state');
            this.setState(this.state);
          }
        }
      ]
    );
  }

  editRequest(id) {
    if (config.DEV) console.log(`Editing request with id: ${id}`);
  }

  renderRow() {
    if (this.state.requests.isValid()) {
      return this.state.requests.map(rowData => {
        return (
          <RequestItem
            key={rowData.id}
            data={rowData}
            delete={id => this.deleteRequest(id)}
            edit={id => this.editRequest(id)}
            sendRequest={(method, url, showResponse) =>
              this.sendRequest(method, url, showResponse)}
          />
        );
      });
    }
  }

  renderModalContent() {
    return (
      <View>
        <Text h4>Request Response</Text>
        <Text>Status: {this.state.response.status}</Text>
        <Text>{JSON.stringify(this.state.response.data, null, 2)}</Text>
        <Button
          icon={{
            name: 'code'
          }}
          title="close"
          onPress={() => this.setState({ isModalVisible: false })}
        />
      </View>
    );
  }

  render() {
    // const htmlContent = `<p>${JSON.stringify(this.state.response.data, null, 4)}</p>`;
    if (this.state.requests.length === 0) {
      return (
        <Container>
          <Text>No Requests</Text>
        </Container>
      );
    }

    return (
      <Container list>
        <List
          containerStyle={{
            width: '100%',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            marginTop: 0
          }}
        >
          {this.renderRow()}

        </List>
        <ModalContainer isVisible={this.state.isModalVisible} >
          {this.renderModalContent()}
        </ModalContainer>
        <AddFab navigate={this.props.navigation}/>
      </Container>
    );
  }
}

export default HomeScreen;
