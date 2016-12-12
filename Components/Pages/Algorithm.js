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
      <View style={styles.pageContainer}>
        <Text style={styles.subtitle}>Convert Algorithm:</Text>
        <View style={styles.subcontainer}>
          <Text style={{textDecorationLine: 'underline'}}>From base-N to base-10</Text>
          <Text>
            { 'Step 1: Split input into a character list. \n' +
              'Step 2: For each character c in list L \n ' +
              '  return the result of the following function F: \n ' +
              '  F(n, i, c) = (n ^ i) * c \n' +
              '  Let n := base-N, i := index of c in list L, c := c \n' +
              'Step 3: Output = sum of returned values from F. \n'
            } </Text>
          <View style={styles.lineBreak}></View>
          <Text style={{textDecorationLine: 'underline'}}>{'\nFrom base-10 to base-N'}</Text>
          <Text>
            {
              'Step 1: Split input into a character list. \n' +
              'Step 2: Let a := input number, d := desired base. \n' +
              'Step 3: Complete following function F: \n' +
              '    F(a, d) = \n ' +
              '        do { \n ' +
              '            q := ⌊ a / d ⌋ \n ' +
              '            r := a - ( d * q ) \n ' +
              '            result := result + r \n ' +
              '            a := q \n ' +
              '        } while ( q !== 0 ) \n' +
              'Step 4: Convert all result values > 10 into their respective characters.'
            }
          </Text>
        </View>
      </View>
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
