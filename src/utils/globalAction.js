/* eslint-disable no-underscore-dangle */
import { updateLogin } from '@/views/Login/action';

export default {
  setProps(props, store) {
    this._globalProps = props;
    this._addListeners(props, store);
    store.dispatch(updateLogin(props.mainAppAction.getState().Login.userInfo));
  },
  _addListeners(props, store) {
    props.onGlobalStateChange((value) => {
      const { Login } = store.getState();
      if (JSON.stringify(Login.userInfo) !== JSON.stringify(value.login.userInfo)) {
        console.log('sync logi');
        store.dispatch(updateLogin(value.login.userInfo));
      }
    });
  },
  setGlobalState(state) {
    this._globalProps.setGlobalState(state);
  },
  updateMainLoginInfo(newInfo) {
    this._globalProps.mainAppAction.updateLoginInfo(newInfo);
  },
  // setMainNavTab(curTab) {
  //   this._globalProps?.mainAppAction.updateMainBoardInfo({
  //     curTab,
  //   });
  // },
};
