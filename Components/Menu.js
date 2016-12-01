import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './../stylesheet';

import Convert from './Pages/Convert';
import Arithmetic from './Pages/Arithmetic';
import Algorithm from './Pages/Algorithm';
import Creator from './Pages/Creator';
import License from './Pages/License';

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
