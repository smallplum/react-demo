import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';
import store from '@/utils/localStorage';

axios.defaults.withCredentials = true; // 设置跨域
export default {
  request(config) {
    let token = '';
    const userInfo = store.getItem('login_user');
    if (userInfo) {
      token = userInfo.token;
    }
    const headers = config.headers || { token };
    headers.token = token;
    return axios({ ...config, headers }).then((res) => {
      if (res.data.code === 402) {
        this.goToLogin();
      }
      if (res.data.code === -1) {
        message.info(res.data.data);
      }
      return res;
    });
  },
  goToLogin() {
    window.location.hash = '/login';
  },
  postJSON(url, data) {
    return this.request({
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      url,
      data: JSON.stringify(data),
    }).then((res) => res && res.data);
  },
  postJsonBlob(url, data) {
    return this.request({
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      responseType: 'blob',
      url,
      data: JSON.stringify(data),
    }).then((res) => res && res.data);
  },
  post(url, data) {
    return this.request({
      method: 'POST',
      url,
      data: qs.stringify(data),
    }).then((res) => res && res.data);
  },
  get(url, params) {
    return this.request({
      url,
      params,
    }).then((res) => res && res.data);
  },
};
