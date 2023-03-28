import React from 'react';
import ReactDOM from 'react-dom';
import CustomRoutes from './customRoutes';
import './virtual:windi.css';

import store from './store';

import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <CustomRoutes />
  </Provider>,
  document.getElementById('root')
);
