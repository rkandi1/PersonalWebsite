import React, { useState } from 'react';
import { render } from 'react-dom';

const InnerComponent = (props) => {


  return (<h3></h3>);
};

const SampleComponent = (props) => {
  return (<h1>{'Hello World'}</h1>);
}

render(<SampleComponent />, document.getElementById('app'));