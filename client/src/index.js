import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { StraydarApp } from './App';
import { Provider } from 'react-redux';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <StraydarApp store={store}/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
