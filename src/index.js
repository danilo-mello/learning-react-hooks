import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CountContextProvider from './context/count-context'
import WeatherContextProvider from './context/weather-context'
import ToDoContextProvider from './context/todo-context';

ReactDOM.render(
  <CountContextProvider>
    <WeatherContextProvider>
      <ToDoContextProvider>
       <App />
      </ToDoContextProvider>
    </WeatherContextProvider>
  </CountContextProvider>,
  document.getElementById('root')
);
