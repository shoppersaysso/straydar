import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { WrapperApp } from './App';
import { createStore, applyMiddleware, compose } from 'redux';
// import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import catsReducer from './reducers/catsReducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  catsReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
 document.getElementById('root'));

registerServiceWorker();
