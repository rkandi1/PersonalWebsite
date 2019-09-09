import React from 'react';
import { render } from 'react-dom';
import { log } from 'utils/jsutils';

const SampleComponent = (props) => {
  log('Testing new utils file.');
};

render(<SampleComponent />, document.getElementById('app'));