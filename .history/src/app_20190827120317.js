import React from 'react';
import { render } from 'react-dom';

const SampleComponent = (props) => {
  return (<h1>{'Hello World'}</h1>);
}

render(<SampleComponent />, document.getElementById('app'));