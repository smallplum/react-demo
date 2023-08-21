const getTypeParams = (type = 0, params = {}, myTypeMap = {}) => {
  const keysArr = myTypeMap[type];
  const res = {};
  for (let i = 0; i < keysArr.length; i++) {
    res[keysArr[i]] = params[keysArr[i]];
  }
  return res;
};

export default getTypeParams;
