// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import qs from 'query-string';

const isHasChangedCondition = (myCondition = {}, qsQuery = {}) => {
  const keys = Object.keys(qsQuery);
  for (let i = 0; i < keys.length; i++) {
    if (myCondition[keys[i]] !== qsQuery[keys[i]]) {
      return true;
    }
  }
  return false;
};
function useChangePageCondition(search, funcArr = [], selfCondition) {
  const qsQuery = qs.parse(search);

  useEffect(() => {
    if (isHasChangedCondition(selfCondition, qsQuery) && !selfCondition?.first) {
      const tempCondition = {
        ...selfCondition,
        ...qsQuery,
        first: true
      };
      for (let i = 0; i < funcArr.length; i++) {
        funcArr[i](tempCondition);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qsQuery]);
}
export default useChangePageCondition;
