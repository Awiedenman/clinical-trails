import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Containers/App';
import BrowserRouter from 'react-router';
import { provider } from 'react-redux';
import { createStore } from 'redux';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore( rootReducer, DevTools)

const router = (
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

