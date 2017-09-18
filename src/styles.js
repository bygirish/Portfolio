
import * as appstyleguide from './../appstyleguide';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './../utils';

export default {

  container: {
    flex: 1,
    backgroundColor: appstyleguide.APP_BACKGROUND_COLOR,
    padding: 20,
    marginBottom: 0
  },

  labelContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  textStyle : {
    fontFamily: appstyleguide.FONT_STYLE,
    fontSize: 18,
    flex: 1,
  },

  dateStyle: {
    fontSize: 18,
    fontFamily: appstyleguide.FONT_STYLE,
    color: appstyleguide.APP_COLOR,
    alignSelf: 'flex-start'
  },

  buttonTextStyle: {
    fontFamily: appstyleguide.FONT_STYLE,
    fontSize: 16,
    color: 'white'
  },

  uploadButtonStyle: {
    borderRadius: 10,
    backgroundColor: appstyleguide.UPLOAD_BUTTON_COLOR,
    padding: 10,
    alignItems: 'center',
    width: DEVICE_WIDTH * 0.4
  },

  submitButtonStyle: {
    marginTop: 20,
    height: 40,
    backgroundColor: appstyleguide.SUBMIT_BUTTON_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },

  summaryContainer: {
    backgroundColor: appstyleguide.SUMMARY_BACKGROUND_COLOR,
    flex: 1
  },

  headingStyle: {
    fontFamily: appstyleguide.FONT_STYLE,
    fontSize: 20,
    padding: 20,
    alignSelf: 'center'
  },

  imageStyle: {
    width: DEVICE_WIDTH * 0.5,
    height: DEVICE_WIDTH * 0.5,
    borderRadius: 10,
    alignSelf: 'center'
  },

  summaryTextStyle: {
    fontFamily: appstyleguide.FONT_STYLE,
    fontSize: 16,
    color: '#446CB3'
  },

  summaryLabelStyle: {
    fontFamily: appstyleguide.FONT_STYLE,
    fontSize: 16,
  },

}
