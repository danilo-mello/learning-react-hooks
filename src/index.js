import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CountContextProvider from './context/count-context'
import WeatherContextProvider from './context/weather-context'

ReactDOM.render(
  <CountContextProvider>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </CountContextProvider>,
  document.getElementById('root')
);
