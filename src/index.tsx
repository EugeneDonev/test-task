import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GLOBAL_STYLE } from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GLOBAL_STYLE />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
