import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { log } from '../utils/jsutils';

import NavList from './NavList';
import InvalidURL from './InvalidURL'l

const App = (props) => {
  log('Inside App...');
  return (
    <Switch>
      <Route 
        component={NavList}
        exact
        path={'/'}
      />
      <Route 
        component={NavList}
        exact
        path={'/'}
      />
    </Switch>
  );
};

export default App;