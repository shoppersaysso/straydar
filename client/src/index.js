import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import catsReducer from './reducers/catsReducer';
import registerServiceWorker from './registerServiceWorker';

export const store = () => {
  return createStore(catsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('root'));

registerServiceWorker();
