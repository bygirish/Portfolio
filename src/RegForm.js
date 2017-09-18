
import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Dimensions, Alert, Image, TouchableWithoutFeedback, DatePickerAndroid, Picker, ScrollView, TouchableOpacity} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import ImagePicker  from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker';
import { Icon } from 'native-base';

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
      addressLine2: '',
      showOptions: false,
      buttonText: 'Upload Picture'
    };

  }

  showSummary = () => {
    if( this.state.firstName == '')
      Alert.alert('','Enter First Name');
      else if( this.state.lastName == '')
        Alert.alert('','Enter Last Name');
        else if( this.state.dob == 'Choose Date')
          Alert.alert('','Select Date');
          else if( this.state.addressLine1 == '')
            Alert.alert('','Enter AddressLine1');

            else if( this.state.city == '')
              Alert.alert('','Enter City');
              else if( this.state.state == '')
                Alert.alert('','Enter State');
                else if( this.state.country == '')
                  Alert.alert('','Enter Country');
                  else if( this.state.buttonText == 'Upload Picture')
                    Alert.alert('','Upload Picture');
      else {
        Actions.Summary(this.state);
      }

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
        this.setState({imagePath: image.path, buttonText: 'Uploaded', showOptions: false });
    })
    .catch(err => {
      console.log(err);
    });

  }

  // When Gallery option is chosen
  showGallery = () => {

    ImagePicker.openPicker({
      width: DEVICE_HEIGHT,
      height: DEVICE_HEIGHT,
      includeBase64: true,
      cropping: true
      }).then(image => {
      console.log("imageProperties from Gallery - ", image);
      this.setState({imagePath: image.path, buttonText: 'Uploaded', showOptions: false });
    })
    .catch(err => {
      console.log(err);
    });

  }

  showPicker = async () => {

    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
        maxDate: new Date()
      });
      if (action == DatePickerAndroid.dismissedAction) {

        year=new Date().getFullYear();
        month=new Date().getMonth();
        day=new Date().getDate();
      }
      console.log("actionCalender", action);

    if(month != "")
    month = month + 1;
    if (month < 10 && month != "")
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
        <ScrollView keyboardShouldPersistTaps = 'always' showsVerticalScrollIndicator = { false } >

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
                <Text style={{ fontSize: 16, fontFamily: 'avenirlight', alignSelf: 'flex-start', color: '#19B5FE'}}>{this.state.dob}</Text>
                </View>
            </TouchableWithoutFeedback>
          </View>

        <View style = {{ flexDirection: 'row', alignItems: 'center', marginTop: 15}} >
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

          <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress = { () => this.setState({ showOptions: !this.state.showOptions }) } style = {{  borderRadius: 10, backgroundColor: '#3498db', padding: 10, width: DEVICE_WIDTH * 0.4 }}>
              <Text style = {{ fontFamily: 'avenir',
              fontSize: 16, color: 'white', alignSelf: 'center', }}> {this.state.buttonText} </Text>
            </TouchableOpacity>
         {
           this.state.showOptions ?
          <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress = { this.showCamera } >
          <Icon name = 'camera' style = {{ color: '#2C3E50', marginLeft: 30, marginRight: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress = { this.showGallery } >
          <Icon name = 'images' style = {{ color: '#2C3E50' }} />
            </TouchableOpacity>
          </View> : <Text/>
        }

          </View>


          <View style={{margin: 10}} />

          <TouchableOpacity onPress = { this.showSummary }  style={{ height: 40, backgroundColor: '#2980b9', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
              <Text style = {{ fontFamily: 'avenirlight',
              fontSize: 16, color: 'white' }}>SUBMIT</Text>
          </TouchableOpacity>

        </ScrollView>


      </View>
    );
  }
}
