import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import Button from 'react-native-button';
import { styles } from './../../stylesheet';
import Page from './../Page';

import validate from './../../Functions/validate';
import baseBto10 from './../../Functions/baseBto10';
import base10toB from './../../Functions/base10toB';

class ArithmeticBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputX: '',
      baseX: '',
      inputY: '',
      baseY: '',
      resultBase: '',
      operation: '',
      result: 'Please input numbers.'
    }
    this.calculate = this.calculate.bind(this);
  }
  calculate() {
    const iX = this.state.inputX;
    const bX = this.state.baseX;
    const iY = this.state.inputY;
    const bY = this.state.baseY;
    const rB = this.state.resultBase;
    const operation = this.state.operation;

    if (validate(iX, bX) && validate(iY, bY)) {
      let x = baseBto10(iX, bX);
      let y = baseBto10(iY, bY);
      let z;
      switch(operation) {
        case 'add':
          z = x + y;
          break;
        case 'sub':
          z = x - y;
          break;
        case 'mul':
          z = x * y;
          break;
        case 'div':
          z = x / y;
          break;
        default:
          z = 0;
      }
      let r = base10toB(z, rB);

      this.setState({result: r})
      z = 0;
    } else {
      this.setState({result: 'Invalid Input'})
    }
  }
  render() {
    return (
      <View style={styles.inputBody_outer}>
        <View style={styles.inputBody_inner}>
          <Text style={styles.subtitle}>Value x</Text>
          <Text>Enter a positive number, base 2 - 36.</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Number x"
              keyboardType='default'
              onChangeText={(text) => {
                if ( text.lenght === 0) text = '';
                this.setState({inputX: text})
              }}
            />
          </View>
        </View>

        <View style={styles.inputBody_inner}>
          <Text>Enter a base between 2 and 36</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Base x"
              keyboardType='numeric'
              onChangeText={(text) => {
                let ib = parseInt(text);
                if (isNaN(ib) || text.length === 0 || text < 2 || text > 36) {
                  text = '';
                }
                this.setState({baseX: text}) //input base is entered as a string
              }}
            />
          </View>
        </View>

        <View style={styles.lineBreak}></View>

        <View style={styles.inputBody_inner}>
          <Text style={styles.subtitle}>Value y</Text>
          <Text>Enter a positive number, base 2 - 36.</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Number y"
              keyboardType='default'
              onChangeText={(text) => {
                if ( text.lenght === 0) text = '';
                this.setState({inputY: text})
              }}
            />
          </View>
        </View>

        <View style={styles.inputBody_inner}>
          <Text>Enter a base between 2 and 36</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Base y"
              keyboardType='numeric'
              onChangeText={(text) => {
                let ib = parseInt(text);
                if (isNaN(ib) || text.length === 0 || text < 2 || text > 36) {
                  text = '';
                }
                this.setState({baseY: text}) //input base is entered as a string
              }}
            />
          </View>
        </View>

        <View style={styles.lineBreak}></View>

        <View style={styles.inputBody_inner}>
          <Text>Enter a base between 2 and 36</Text>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Result base"
              keyboardType='numeric'
              onChangeText={(text) => {
                let ib = parseInt(text);
                if (isNaN(ib) || text.length === 0 || text < 2 || text > 36) {
                  text = '';
                }
                this.setState({resultBase: text}) //input base is entered as a string
              }}
            />
          </View>
        </View>

        <View style={styles.lineBreak}></View>

        <View style={styles.arithmeticButtons}>
          <Button
            style={styles.primaryButton}
            containerStyle={styles.arithmeticButtonContainer}
            onPress={() => {
              this.setState({operation: 'add'},
              () => {
                this.calculate();
              });

            }}
          >
            Add
          </Button>
          <Button
            style={styles.primaryButton}
            containerStyle={styles.arithmeticButtonContainer}
            onPress={() => {
              this.setState({operation: 'sub'},
              () => {
                this.calculate();
              });
            }}
          >
            Sub
          </Button>
          <Button
            style={styles.primaryButton}
            containerStyle={styles.arithmeticButtonContainer}
            onPress={() => {
              this.setState({operation: 'mul'},
              () => {
                this.calculate();
              });
            }}
          >
            Mul
          </Button>
          <Button
            style={styles.primaryButton}
            containerStyle={styles.arithmeticButtonContainer}
            onPress={() => {
              this.setState({operation: 'div'},
              () => {
                this.calculate();
              });
            }}
          >
            Div
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
