/* eslint-disable array-callback-return */
import apis from '@/service/apis';
import http from '@/service/http';
import types from './types';

export function aa() {}

export function updateInfo(baseInfo) {
  return {
    type: types.UPDATE_BASE_INFO,
    payload: {
      baseInfo: {
        ...baseInfo,
      },
    },
  };
}

export function GetStaticPie(query) {
  return async (dispatch) => {
    const res = await http.postJSON(apis.getStaticPie, query);
    if (res && res.code === 200) {
      dispatch({
        type: types.UPDATE_BASE_INFO,
        payload: {
          baseInfo: {
            StaticPieData: res.data,
          },
        },
      });
    }
    return res;
  };
}

export function clearDetail() {
  return {
    type: types.CLEAR_DETAIL,
  };
}
