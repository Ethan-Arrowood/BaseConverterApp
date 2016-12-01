import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { styles } from './../../stylesheet';
import Page from './../Page';

class AlgorithmBody extends Component {
  render() {
    return (
      <Text>Algorithm body.</Text>
    )
  }
};
export default class Algorithm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Algorithm'
    }
  }

  render() {
    return (
      <Page title={this.state.title} body={<AlgorithmBody/>}/>
    );
  }
};
