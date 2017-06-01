import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-elements';
import { ListView } from 'realm/react-native';

import Container from '../components/container';
import RequestItem from '../components/request-item';
import RequestService from '../data/services/requestService';

import config from '../config/config';

class HomeScreen extends Component {
  getState() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    let requests = RequestService.findAll();
    return {
      requests,
      dataSource: ds.cloneWithRows(requests)
    };
  }

  constructor() {
    super();

    this.state = this.getState();

    this.deleteRequest = this.deleteRequest.bind(this);
    this.editRequest = this.editRequest.bind(this);
  }

  deleteRequest(uuid) {
    if(config.DEV) console.log(`Deleting request with id: ${uuid}`);
  }

  editRequest(uuid) {
    if(config.DEV) console.log(`Editing request wuth id: ${uuid}`);
  }

  renderRow(rowData) {
    return (
      <RequestItem
        data={rowData}
        delete={(uuid) =>  this.deleteRequest(uuid) }
        edit={(uuid) => this.editRequest(uuid)}
      />
    );
  }

  render() {
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
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </List>
      </Container>
    );
  }
}

export default HomeScreen;
