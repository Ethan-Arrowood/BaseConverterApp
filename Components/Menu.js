import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './../stylesheet';

import Convert from './Convert';
import Arithmetic from './Arithmetic';
import Algorithm from './Algorithm';
import Creator from './Creator';
import License from './License';

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Base Converter App</Text>
        <Text style={styles.subtitle}>Created by: Ethan Arrowood</Text>

        <Convert/>
        <Arithmetic/>
        <Algorithm/>
        <Creator/>
        <License/>

      </View>
    )
  }
};
