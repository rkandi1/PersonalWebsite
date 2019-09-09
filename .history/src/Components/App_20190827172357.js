import React from 'react';
import { Router } from 'react-router-dom';
import { log } from '../utils/jsutils';

import NavList from './NavList';

const App = (props) => {
  log('Inside App...');
  return (
    <NavList />
  );
};

export default App;