import types from './types';

const defaultState = {
  EvaluateSidesArr: {},
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_BASE_INFO: {
      // 基本信息更新
      const { baseInfo } = action.payload;
      return {
        ...state,
        ...baseInfo,
      };
    }
    case types.CLEAR_DETAIL: {
      return {
        ...defaultState,
      };
    }
    default:
      return state;
  }
};
