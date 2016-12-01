import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { styles } from './../stylesheet';
import Page from './Page';

class LicenseBody extends Component {
  render() {
    return (
      <Text>License Body.</Text>
    )
  }
}
export default class License extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'License'
    }
  }

  render() {
    return (
      <Page title={this.state.title} body={<LicenseBody/>}/>
    );
  }
};
