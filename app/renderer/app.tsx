import React from 'react';
import ReactDOM from 'react-dom';
import CustomRoutes from './customRoutes';
import './virtual:windi.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import store from './store';

import { Provider } from 'react-redux';

ReactDOM.render(
  <ConfigProvider locale={zhCN} componentSize="middle">
    <Provider store={store}>
      <CustomRoutes />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);
