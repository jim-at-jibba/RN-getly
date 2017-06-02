import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { Icon } from 'react-native-elements';


import Collapsible from 'react-native-collapsible';
import styles from './styles';
import colours from '../../config/colours';
import config from '../../config/config';

class RequestItem extends Component {
  constructor() {
    super();

    this.state = {
      isMenuVisible: true,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  }

  methodColour(method) {
    let methodColor;

    switch (method) {
      case 'GET':
        methodColor = colours.get;
        break;
      case 'POST':
        methodColor = colours.post;
        break;
      case 'DELETE':
        methodColor = colours.delete;
        break;
      case 'PUT':
        methodColor = colours.put;
        break;
      default:
        break;
    }
    return {
      color: methodColor
    };
  }

  render() {
    console.log(this.props.data)
    const { title, method, url, viewResponse } = this.props.data;
    return (
      <View>
        <View style={styles.itemStyle}>
          <TouchableWithoutFeedback
            onPress={() => this.props.sendRequest(method, url, viewResponse)}
            onLongPress={() => this.toggleMenu()}
          >
            <View style={styles.textWrapper}>
              <Text style={[styles.textMethod, this.methodColour(method)]}>
                {method}
              </Text>
              <Text style={styles.textTitle}>{title}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <Collapsible collapsed={this.state.isMenuVisible}>
          <View style={styles.itemMenu}>
            <Icon
              name="delete-forever"
              cxo
              underlayColor="transparent"
              onPress={() => {
                this.props.delete(this.props.data.id);
                this.toggleMenu();
              }}
            />
            <Icon
              name="mode-edit"
              underlayColor="transparent"
              onPress={() => {
                this.props.edit(this.props.data.id);
                this.toggleMenu();
              }}
            />
          </View>
        </Collapsible>
      </View>
    );
  }
}

export default RequestItem;
