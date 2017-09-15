
import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Dimensions, Alert, Image } from 'react-native';
import styles from './styles';


export default class Summary extends Component {

  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View>
        <Text style = {{ fontFamily: 'avenir', fontSize: 20, padding: 20, alignSelf: 'center' }}>Summary</Text>
        <Image source = {{ uri: this.props.imagePath }} style = {{ width: 100, height: 100}} />
      </View>
    );
  }

}
