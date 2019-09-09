import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { log } from '../utils/jsutils';

import NavList from './NavList';
import InvalidURL from './InvalidURL';

const App = (props) => {
  log('Inside App...');
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          component={NavList}
          exact
          path={'/'}
        />
        <Route 
          component={InvalidURL}
          exact
          path={'/About'}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;