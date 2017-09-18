/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Router from './src/Router';

export default class LFrame extends Component {
  render() {
    return (
      <Router />
    );
  }
}

AppRegistry.registerComponent('LFrame', () => LFrame);
