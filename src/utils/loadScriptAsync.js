/**
 * 异步懒加载script
 */
/* eslint-disable no-console */
const loadedUris = {};
export default (uri) => new Promise((resolve) => {
    // 检查缓存
    if (loadedUris[uri] === 'done') {
      resolve();
    } else if (loadedUris[uri] === 'pending') {
      const timerId = setInterval(() => {
        if (loadedUris[uri] === 'done') {
          resolve();
          clearTimeout(timerId);
        }
      }, 100);
    } else {
      // 缓存加载过的uri
      loadedUris[uri] = 'pending';
      const tag = document.createElement('script');
      tag.src = uri;
      tag.async = true;
      tag.onload = () => {
        loadedUris[uri] = 'done';
        resolve();
      };
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  });
