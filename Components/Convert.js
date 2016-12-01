import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { styles } from './../stylesheet';
import Page from './Page';

class ConvertBody extends Component {
  render() {
    return (
      <View>
        <Text>Convert body.</Text>
        <Text>Some more text here.</Text>
      </View>

    )
  }
};

export default class Convert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Convert'
    }
  }

  render() {
    return (
      <Page title={this.state.title} body={<ConvertBody/>}/>
    );
  }
};
