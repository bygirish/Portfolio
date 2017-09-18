import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import * as appstyleguide from './../appstyleguide';

export default class Input extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <TextInput
        placeholder = ""
        autoCorrect = { false }
        autoCapitalize = 'none'
        style = {{  flex: 1,
                    height: 45,
                    color: appstyleguide.APP_COLOR,
                    fontFamily: appstyleguide.FONT_STYLE,
                    fontSize: 18
                }}
        onChangeText = { this.props.onChangeText }
        value = { this.props.value }
        selectionColor = { appstyleguide.APP_COLOR }
        underlineColorAndroid = { appstyleguide.APP_COLOR }
      />
    );

  }

}
