import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import Button from 'react-native-button';
import { styles } from './../../stylesheet';
import Page from './../Page';

import base10toB from './../../Functions/base10toB';
import baseBto10 from './../../Functions/baseBto10';
import validate from './../../Functions/validate';

class ConvertBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      ib: '',
      ob: '',
      result: 'Please input numbers.'
    }
    this.convert = this.convert.bind(this);

  }
  convert() {
    const input = this.state.input;
    const ib = parseInt(this.state.ib);
    const ob = parseInt(this.state.ob);

    let result = validate(input, ib) ? base10toB(baseBto10(input, ib), ob) : 'Invalid inputs';

    // result = parseInt(input, ib).toString(ob);

    this.setState({result})
  }
  render() {
    return (
      <View style={styles.inputBody_outer}>

        <View style={styles.inputBody_inner}>
          <Text>Enter a positive number, base 2 - 36.</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Number to be converted"
              keyboardType='default'
              onChangeText={(text) => {
                if (text.length === 0) {
                  text = '';
                }
                this.setState({input: text}) //input number is entered as a string
              }}
            />
          </View>
        </View>

        <View style={styles.inputBody_inner}>
          <Text>Enter a base between 2 and 36</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Input base"
              keyboardType='numeric'
              onChangeText={(text) => {
                let ib = parseInt(text);
                if (isNaN(ib) || text.length === 0 || text < 2 || text > 36) {
                  text = '';
                }
                this.setState({ib: text}) //input base is entered as a string
              }}
            />
          </View>
        </View>

        <View style={styles.inputBody_inner}>
          <Text>Enter a base between 2 and 36</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Output base"
              keyboardType='numeric'
              onChangeText={(text) => {
                let ob = parseInt(text);
                if (isNaN(ob) || text.length === 0 || text < 2 || text > 36) {
                  text = '';
                }
                this.setState({ob: text})
              }}
            />
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <Button
            style={styles.primaryButton}
            containerStyle={styles.primaryButtonContainer}
            onPress={() => {
              this.convert();
            }}
          >
            Submit
          </Button>
        </View>

        <Text style={{fontSize: 30}}>Result: </Text>
        <View style={styles.result}>
          <Text stle={{fontSize: 25}}>{this.state.result}</Text>
        </View>
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
