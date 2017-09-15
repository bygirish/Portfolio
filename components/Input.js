import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class Input extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <TextInput
        placeholder = ""
        autoCorrect = { false }
        autoCapitalize = 'none'
        style = { { flex: 1, height: 40, color: '#19B5FE', fontWeight: 'bold', alignSelf: 'flex-end', flexDirection: 'row' } }
        onChangeText = { this.props.onChangeText }
        value = { this.props.value }
        selectionColor = '#19B5FE'
        underlineColorAndroid = '#19B5FE'
      />
    );
  }

}
