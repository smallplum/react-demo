export default function typeCreater(map, key) {
  const obj = {};
  Object.keys(map).forEach((k) => {
    obj[k] = `${key}_${map[k]}`;
  });
  return obj;
}
