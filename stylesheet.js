import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  modal_header: {
    marginTop: 22
  },
  menuButton: {
    color: '#0485A9'
  },
  menButtonContainer: {
    borderColor: '#0485A9',
    borderWidth: 2,
    margin: 10,
    width: 150,
    padding: 10,
    height: 45,
    bottom: 5
  },
  title: {
    fontSize: 30,
    color: '#0485A9'
  },
  subtitle: {
    fontSize: 20,
    color: '#0485A9',
    marginBottom: 22
  }
});
