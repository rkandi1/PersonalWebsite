import React, { useState } from 'react';
import { render } from 'react-dom';

const InnerComponent = (props) => {
  const { word } = props;

  return (<h3>{word}</h3>);
};

const SampleComponent = (props) => {
  const [word, setWord] = useState('World');

  return (
    <div>
      <h1> {'Hello'} </h1>
    </div>
  );
}

render(<SampleComponent />, document.getElementById('app'));