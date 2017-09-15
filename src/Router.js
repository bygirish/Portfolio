import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import RegForm from './RegForm';
import Summary from './Summary';

const RouterComp = () => {
  console.log('In RouterComp');
  return(
    <Router>
      <Scene key="root">
        <Scene key = "RegForm" initial component = { RegForm } hideNavBar />
        <Scene key = "Summary" component = { Summary } hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComp;
