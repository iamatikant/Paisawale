import React from 'react';
import ReactDOM from 'react-dom';

import Signup from './components/App';

ReactDOM.hydrate(
  <Signup />,
  document.getElementById('root'),
);