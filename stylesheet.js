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
  lineBreak: {
    flex: 0,
    margin: 0,
    borderColor: '#0485A9',
    borderBottomWidth: 1
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
  textInputWrapper: {
    marginTop: 3,
    borderStyle: 'solid',
    borderColor: '#0485A9',
    borderBottomWidth: 1
  },
  inputBody_outer: {
    flex: 0,
    width: 300,
    borderWidth: 1,
    borderColor: '#0485A9',
    borderStyle: 'solid',
    padding: 15,
    backgroundColor:'#EBF9FF'
  },
  inputBody_inner: {
    padding: 5,
    margin: 5
  },
  input: {
    height: 20,
  },
  arithmeticButtons: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  arithmeticButtonContainer: {
    borderColor: '#0485A9',
    borderWidth: 2,
    margin: 5,
    width: 60,
    padding: 10,
    height: 45
  },
  result: {
    paddingVertical: 5,
    borderStyle: 'solid',
    borderColor: '#0485A9',
    borderBottomWidth: 1
  }
});
