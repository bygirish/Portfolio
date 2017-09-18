
import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Dimensions, Alert, Image } from 'react-native';
import styles from './styles';

const DEVICE_WIDTH = Dimensions.get('window').width ;
const DEVICE_HEIGHT = Dimensions.get('window').height ;

export default class Summary extends Component {

  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View style = {{ backgroundColor: '#F2F1EF', flex: 1 }}>
        <Text style = {{ fontFamily: 'avenir', fontSize: 20, padding: 20, alignSelf: 'center' }}>Summary</Text>
        <Image source = {{ uri: this.props.imagePath }} style = {{ width: DEVICE_WIDTH * 0.5, height: DEVICE_WIDTH * 0.5, borderRadius: 10, alignSelf: 'center' }} />
        <View style = {{ margin: 30 }}>
        <Text style = {{ fontFamily: 'avenirlight', fontSize: 16}} >Name: <Text style = {{ fontFamily: 'avenirlight', fontSize: 16, color: '#446CB3'}} >{this.props.firstName} {this.props.lastName}</Text></Text>
        <Text style = {{ fontFamily: 'avenirlight', fontSize: 16}} >Born On: <Text style = {{ fontFamily: 'avenirlight', fontSize: 16, color: '#446CB3'}} >{ this.props.dob } </Text></Text>
        <Text style = {{ fontFamily: 'avenirlight', fontSize: 16}} >Gender: <Text style = {{ fontFamily: 'avenirlight', fontSize: 16, color: '#446CB3'}} >{ this.props.gender }</Text></Text>
        <Text style = {{ fontFamily: 'avenirlight', fontSize: 16}} >Address: <Text style = {{ fontFamily: 'avenirlight', fontSize: 16, color: '#446CB3'}} >{ this.props.addressLine1 }, { this.props.addressLine2 }, { this.props.city }, { this.props.state }, { this.props.country }</Text></Text>

      </View></View>
    );
  }

}
