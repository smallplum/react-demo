import creater from '@/utils/typeCreater';
import keyMirror from 'keymirror';

const types = keyMirror({
  UPDATE_BASE_INFO: null,
  CLEAR_DETAIL: null,
});

export default creater(types, 'Retrosynthesis');
