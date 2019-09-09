import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { log } from '../utils/jsutils';

import HomeMain from './Home/HomeMain';
import AboutMain from './About/AboutMain';
import InvalidURL from './InvalidURL';

const App = (props) => {
  log('Inside App...');
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          component={HomeMain}
          exact
          path={'/'}
        />
        <Route 
          component={AboutMain}
          path={'/About'}
        />
        <Route 
          component={InvalidURL}
          path={'/Portofolio'}
        />
        <Route 
          component={InvalidURL}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;