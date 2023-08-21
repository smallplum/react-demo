/*
{
    expire:20202020202
    value:
}
*/
export default {
  removeItem(key) {
    localStorage.removeItem(key);
  },
  getItem(key) {
    const originValue = localStorage.getItem(key);
    if (!originValue) {
      return null;
    }
    if (originValue) {
      const data = JSON.parse(originValue);
      if (data.expireTime && Date.now() >= data.expireTime) {
        localStorage.removeItem(key);
        return null;
      }
      if (data.type === 'json') {
        return JSON.parse(data.value);
      }
      return data.value;
    }
    return null;
  },
  setItem(key, data, expireTime) {
    const newObj = {
      expireTime: expireTime || null
    };
    if (typeof data === 'object') {
      newObj.type = 'json';
      newObj.value = JSON.stringify(data);
    } else {
      newObj.value = data;
    }
    localStorage.setItem(key, JSON.stringify(newObj));
  }
};
