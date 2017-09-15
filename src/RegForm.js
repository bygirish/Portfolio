
import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Dimensions, Alert, Image, TouchableWithoutFeedback, DatePickerAndroid, Picker, ScrollView, TouchableOpacity} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import ImagePicker  from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker';

import styles from './styles';
import Input from './../components/Input';

const DEVICE_WIDTH = Dimensions.get('window').width ;
const DEVICE_HEIGHT = Dimensions.get('window').height ;

export default class RegForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      dob: 'Choose Date',
      imagePath: null,
      gender: 'Male',
      country: '',
      city: '',
      state: '',
      addressLine1: '',
      addressLine2: ''
    };

  }

  showSummary = () => {
    Actions.Summary(this.state);
  }

  showCamera = () => {
    console.log('showCamera');

    ImagePicker.openCamera({
      width: DEVICE_HEIGHT,
      height: DEVICE_HEIGHT,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 1,
      }).then(image => {
        console.log("imageProperties from Camera - ", image);
        this.setState({imagePath: image.path});
    })
    .catch(err => {
      console.log(err);
      if(err == "Error: Cannot find image data")
      Alert.alert("Error","Upload correct format");
    });

  }

  // When Gallery option is chosen
  showGallery = () => {

    ImagePicker.openPicker({
      width: Dimensions.get('window').height,
      height: Dimensions.get('window').height,
      includeBase64: true,
      cropping: true
      }).then(image => {
      console.log("imageProperties from Gallery - ", image);
      this.setState({imagePath: image.path});
    })
    .catch(err => {
      console.log(err);
      if(err == "Error: Cannot find image data")
      Alert.alert("Error","Upload correct format");
    });

  }

  showPicker = async () => {

    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
        maxDate: new Date()
      });
      if (action == DatePickerAndroid.dismissedAction) {
        year="1994";
        month=0;
        day="9";
      }
      console.log("actionCalender", action);

    month = month + 1;
    if (month < 10)
    month = "0"+month;
    if (day<10)
    day = "0"+day;
      this.setState({dob: day+"-"+month+"-"+year});
    }
    catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  };

  render() {

    console.log(this.state);

    return (
      <View style = { styles.container }>
        <ScrollView style = { styles.content }>

          <View style = {{ flexDirection: 'row', alignItems: 'center', flex: 1 }} >
            <Text style = { styles.textStyle }>First Name :</Text>
            <Input
              onChangeText = { firstName => this.setState({ firstName })}
              value = { this.state.firstName }
            />
          </View>

          <View style = {{ flexDirection: 'row', alignItems: 'center'}} >
            <Text style = { styles.textStyle }>Last Name :</Text>
            <Input
              onChangeText = { lastName => this.setState({ lastName })}
              value = { this.state.lastName }
            />
          </View>

          <View style = {{ flexDirection: 'row', alignItems: 'center', marginTop: 5}} >
            <Text style = { styles.textStyle }>Date of Birth :</Text>
            <TouchableWithoutFeedback
                onPress={this.showPicker}>
                <View style={{ flex: 1, height: 30,  justifyContent: 'flex-end'}}>
                <Text style={{ fontSize: 15, fontFamily: 'avenir', alignSelf: 'flex-start', color: '#19B5FE'}}>{this.state.dob}</Text>
                </View>
            </TouchableWithoutFeedback>
          </View>

        <View style = {{ flexDirection: 'row', alignItems: 'center', marginTop: 10}} >
            <Text style = {{ ...styles.textStyle, paddingTop: 15 }}>Gender :</Text>
            <Picker
                selectedValue={this.state.gender}
                style = {{ width: 150}}
                mode = 'dropdown'
                onValueChange={(gender) => this.setState({gender})}>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>

        <View style = {{ flexDirection: 'row', alignItems: 'center'}} >
            <Text style = { styles.textStyle }>AddressLine1 :</Text>
            <Input
              onChangeText = { addressLine1 => this.setState({ addressLine1 })}
              value = { this.state.addressLine1 }
            />
          </View>

          <View style = {{ flexDirection: 'row', alignItems: 'center'}} >
            <Text style = { styles.textStyle }>AddressLine2 :</Text>
            <Input
              onChangeText = { addressLine2 => this.setState({ addressLine2 })}
              value = { this.state.addressLine2 }
            />
          </View>

          <View style = {{ flexDirection: 'row', alignItems: 'center'}} >
            <Text style = { styles.textStyle }>City :</Text>
            <Input
              onChangeText = { city => this.setState({ city })}
              value = { this.state.city }
            />
          </View>

          <View style = {{ flexDirection: 'row', alignItems: 'center'}} >
            <Text style = { styles.textStyle }>State :</Text>
            <Input
              onChangeText = { state => this.setState({ state })}
              value = { this.state.state }
            />
          </View>

          <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 20}} >
            <Text style = { styles.textStyle }>Country :</Text>
            <Input
              onChangeText = { country => this.setState({ country })}
              value = { this.state.country }
            />
          </View>

          <TouchableOpacity onPress = { this.showCamera } style = {{ backgroundColor: '#19B5FE', padding: 10, width: DEVICE_WIDTH * 0.4 }}>
            <Text style = {{ fontFamily: 'avenir',
            fontSize: 16, color: 'white', alignSelf: 'center'}}> Upload Picture </Text>
          </TouchableOpacity>
          <View style={{margin: 10}} />
          <Button onPress = { this.showSummary } title = 'Submit' color = '#19B5FE'  />
          <View style={{margin: 20}} />
        </ScrollView>
      </View>
    );
  }
}
