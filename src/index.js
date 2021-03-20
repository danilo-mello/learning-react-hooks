import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CountContextProvider from './context/count-context'

ReactDOM.render(
  <CountContextProvider>
    <App />
  </CountContextProvider>,
  document.getElementById('root')
);
