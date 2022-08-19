import React from 'react';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RootLayout from './RootLayout';

export default function App(props) {
  return (
    <HashRouter>
      <ConfigProvider locale={zh_CN}>
        <Provider store={store}>
          <RootLayout {...props} />
        </Provider>
      </ConfigProvider>
    </HashRouter>
  );
}
