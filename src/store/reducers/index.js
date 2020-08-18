import { combineReducers } from 'redux';

import authentication from './authentication';
import general from './general';

export default combineReducers({
  authentication,
  general,
});
