import React from 'react';
import { render } from 'react-dom';
import './index.css';
import configureStore from './store/configureStore';
import { StraydarApp } from './App';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.css'


const store = configureStore();

render(
  <Provider store={store}>
     <StraydarApp store={store}/>
  </Provider>,
  document.getElementById('root')
);
