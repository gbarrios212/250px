import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import activePhotoReducer from './active_photo_reducer';

export default combineReducers({
  modal: modalReducer,
  activePhoto: activePhotoReducer
});
