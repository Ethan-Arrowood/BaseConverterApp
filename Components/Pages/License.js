import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import { styles } from './../../stylesheet';
import Page from './../Page';

class LicenseBody extends Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <Text style={styles.subtitle}>
          The MIT License (MIT)
        </Text>
        <View style={styles.subcontainer}>
          <Text>
            {
              'Copyright (c) 2016 Ethan Arrowood \n\n' +
              'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: \n\n' +
              'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n' +
              'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n'
            }
          </Text>
        </View>
      </View>
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
