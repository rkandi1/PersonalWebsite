import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { log } from '../utils/jsutils';

import NavList from './NavList';

const App = (props) => {
  log('Inside App...');
  return (
    <Switch>
      <Router 
        component={NavList}
        exact
      />
    </Switch>
  );
};

export default App;