
import React, { Component } from 'react';
import { Text, View, Alert, Image } from 'react-native';

import styles from './styles';
import * as appstyleguide from './../appstyleguide';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './../utils';

export default class Summary extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style = { styles.summaryContainer }>

        <Text style = { styles.headingStyle }>Summary</Text>
        <Image source = {{ uri: this.props.imagePath }} style = { styles.imageStyle } />

        <View style = {{ margin: 30 }}>
          <Text style = { styles.summaryLabelStyle } >Name: <Text style = { styles.summaryTextStyle } >{this.props.firstName} {this.props.lastName}</Text></Text>
          <Text style = { styles.summaryLabelStyle } >Born On: <Text style = { styles.summaryTextStyle } >{ this.props.dob } </Text></Text>
          <Text style = { styles.summaryLabelStyle } >Gender: <Text style = { styles.summaryTextStyle } >{ this.props.gender }</Text></Text>
          <Text style = { styles.summaryLabelStyle } >Address: <Text style = { styles.summaryTextStyle } >{ this.props.addressLine1 }, { this.props.addressLine2 }, { this.props.city }, { this.props.state }, { this.props.country }</Text></Text>
        </View>
        
      </View>
    );
  }

}
