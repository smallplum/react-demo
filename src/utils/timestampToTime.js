/* eslint-disable no-var */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable func-names */
function pad(str) {
  return +str >= 10 ? str : `0${str}`;
}
export default function timestampToTime(timestamp) {
  const dateObj = new Date(+timestamp);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const hours = pad(dateObj.getHours());
  const minutes = pad(dateObj.getMinutes());
  const seconds = pad(dateObj.getSeconds());
  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}

/**
 * 格式化日期
 * @method format
 * @static
 * @param {Date} d 日期对象
 * @param {string} pattern 日期格式(y年M月d天h时m分s秒)，默认为"yyyy-MM-dd"
 * @return {string}  返回format后的字符串
 * @example
 var d=new Date();
 alert(format(d," yyyy年M月d日\n yyyy-MM-dd\n MM-dd-yy\n yyyy-MM-dd hh:mm:ss"));
 */
export function formatDate(d, pattern) {
  pattern = pattern || 'yyyy-MM-dd';
  const y = d.getFullYear().toString();
  const o = {
    M: d.getMonth() + 1, // month
    d: d.getDate(), // day
    h: d.getHours(), // hour
    m: d.getMinutes(), // minute
    s: d.getSeconds() // second
  };
  pattern = pattern.replace(/(y+)/gi, (a, b) => y.substr(4 - Math.min(4, b.length)));
  for (const i in o) {
    pattern = pattern.replace(new RegExp(`(${i}+)`, 'g'), (a, b) => (o[i] < 10 && b.length > 1 ? `0${o[i]}` : o[i]));
  }
  return pattern;
}
