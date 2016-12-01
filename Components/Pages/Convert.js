import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import Button from 'react-native-button';
import { styles } from './../../stylesheet';
import Page from './../Page';

class ConvertBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'Enter a positive integer.',
      ib: 'Enter a base between 2 and 32.',
      ob: 'Enter a base between 2 and 32.',
      result: 'Please input numbers.'
    }
    this.convert = this.convert.bind(this);

  }
  convert() {
    const input = this.state.input;
    const ib = parseInt(this.state.ib);
    const ob = parseInt(this.state.ob);
    let result = parseInt(input, ib).toString(ob);

    this.setState({result})
  }
  render() {
    return (
      <View style={styles.convertBody}>

        <View style={styles.convertBody_inner}>

          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.convertInput}
              placeholder="Number to be converted"
              onChangeText={(text) => {
                if (text.length === 0) {
                  text = 'Enter a positive integer.';
                }
                this.setState({input: text})
              }}
            />
          </View>

          <Text>Input: {this.state.input}</Text>
        </View>

        <View style={styles.convertBody_inner}>

          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.convertInput}
              placeholder="Input base"
              onChangeText={(text) => {
                let ib = parseInt(text);
                if (isNaN(ib) || text.length === 0 || text < 2 || text > 36) {
                  text = 'Enter a base between 2 and 36.';
                }
                this.setState({ib: text})
              }}
            />
          </View>

        <Text>Input: {this.state.ib}</Text>
        </View>

        <View style={styles.convertBody_inner}>

          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.convertInput}
              placeholder="Output base"
              onChangeText={(text) => {
                let ob = parseInt(text);
                if (isNaN(ob) || text.length === 0) {
                  text = 'Enter a base between 2 and 36.';
                }
                this.setState({ob: text})
              }}
            />

          </View>
        <Text>Input: {this.state.ob}</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Button
            style={styles.primaryButton}
            containerStyle={styles.primaryButtonContainer}
            onPress={ () => {
              this.convert();
            }}
          >
            Submit
          </Button>
        </View>

        <Text style={{fontSize: 30}}>Result: </Text>
        <View style={styles.convertResult}>
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
