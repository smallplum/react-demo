import keyMirror from 'keymirror';
import creater from '@/utils/typeCreater';

const types = keyMirror({
  UPDATE_BASE_INFO: null,
  CLEAR_DETAIL: null,
});

export default creater(types, 'Retrosynthesis');
