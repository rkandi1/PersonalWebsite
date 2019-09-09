import React, { useState } from 'react';
import { render } from 'react-dom';

const InnerComponent = (props) => {
  const [word, setWord] = useState('World!');

  return (<h3>{word}</h3>);
};

const SampleComponent = (props) => {
  return (<h1>{'Hello World'}</h1>);
}

render(<SampleComponent />, document.getElementById('app'));