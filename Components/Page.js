import React, { Component } from 'react';
import {
  View,
  Text,
  Modal
} from 'react-native';

import { styles } from './../stylesheet';
import MenuButton from './MenuButton';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible() {
    let visible = !this.state.modalVisible;
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={styles.modal_container}>
            <View style={styles.modal_header}>
              <Text style={styles.title}>{this.props.title}</Text>
            </View>
            <View style={styles.modal_body}>
              {this.props.body}
            </View>
            <View style={styles.modal_footer}>
              <MenuButton title="Menu" onPress={this.setModalVisible}/>
            </View>
          </View>
        </Modal>
        <MenuButton title={this.props.title} onPress={this.setModalVisible}/>

      </View>
    )

  }
}
