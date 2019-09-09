import React from 'react';
import { log } from '../utils/jsutils';

import NavList from './NavList';

const App = (props) => {
  log('Inside App...');
  return (
    <NavList />
  );
};

export default App;