import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import RegForm from './RegForm';
import Summary from './Summary';


const RouterComp = () => {
  console.log('In RouterComp');
  return(
    <Router backAndroidHandler = {() => {
    if (Actions.state.index === 0) {
      return false
    }
    Actions.pop()
    return true
}}>
      <Scene key="root">
        <Scene key = "RegForm" initial component = { RegForm } hideNavBar />
        <Scene key = "Summary" component = { Summary } hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComp;
