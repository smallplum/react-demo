/* eslint-disable no-undef */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import routes from '@/router';
import { Provider } from 'react-redux';
import store from '@/store';
import './antd.css';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Switch>{renderRoutes(routes)}</Switch>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
