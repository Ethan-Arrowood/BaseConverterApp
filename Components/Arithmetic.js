import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { styles } from './../stylesheet';
import Page from './Page';

class ArithmeticBody extends Component {
  render() {
    return (
      <Text>Arithmetic body.</Text>
    )
  }
};
export default class Arithmetic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Arithmetic'
    }
  }

  render() {
    return (
      <Page title={this.state.title} body={<ArithmeticBody/>}/>
    );
  }
};
