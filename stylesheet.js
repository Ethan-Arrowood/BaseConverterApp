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
  primaryButton: {
    color: '#0485A9'
  },
  primaryButtonContainer: {
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
  },
  convertBody: {
    flex: 0,
    width: 300,
    borderWidth: 1,
    borderColor: '#0485A9',
    borderStyle: 'solid',
    padding: 15,
    backgroundColor:'#EBF9FF',
  },
  convertBody_inner: {
    padding: 5,
    margin: 5
  },
  convertInput: {
    height: 20,
  },
  textInputWrapper: {
    borderStyle: 'solid',
    borderColor: '#0485A9',
    borderBottomWidth: 1
  },
  convertResult: {
    paddingVertical: 5,
    borderStyle: 'solid',
    borderColor: '#0485A9',
    borderBottomWidth: 1
  }
});
