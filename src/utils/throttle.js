export default function throttle(fn, delay) {
  let flag = true;
  return function () {
      if (flag) {
          setTimeout(() => {
              fn.call(this);
              flag = true;
          }, delay);
      }
      flag = false;
  };
}
