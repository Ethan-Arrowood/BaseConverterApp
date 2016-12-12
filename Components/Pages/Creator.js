import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { styles } from './../../stylesheet';
import Page from './../Page';

class CreatorBody extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <Text style={styles.subtitle}>
          Ethan Arrowood
        </Text>
        <Text>
          {
            'Student at Wentworth Institute of Technology \n' +
            'Majoring in Computer Science. \n' +
            'Minoring in Applied Mathematics & Business Management.'
          }
        </Text>
      </View>
    )
  }
};
export default class Creator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Created By'
    }
  }

  render() {
    return (
      <Page title={this.state.title} body={<CreatorBody/>}/>
    );
  }
};
