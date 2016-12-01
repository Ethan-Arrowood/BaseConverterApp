import React, { Component } from 'react';
import Button from 'react-native-button';

import { styles } from './../stylesheet';

export default class MenuButton extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Button
        style={styles.menuButton}
        containerStyle={styles.menButtonContainer}
        onPress={this.props.onPress}
      >
        {this.props.title}
      </Button>
    )
  }
}
