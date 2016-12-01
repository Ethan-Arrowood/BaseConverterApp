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
      <Text>Creator body.</Text>
    )
  }
};
export default class Creator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Creator'
    }
  }

  render() {
    return (
      <Page title={this.state.title} body={<CreatorBody/>}/>
    );
  }
};
