import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Menu from './Components/Menu';

export default class BaseConverter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu />
    );
  }
};

AppRegistry.registerComponent('BaseConverter', () => BaseConverter);
