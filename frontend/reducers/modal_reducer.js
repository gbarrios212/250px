import { 
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/modal_actions';

const _nullState = {
    id: null
}

const modalReducer = (oldState = _nullState, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return _nullState;
        default: 
            return oldState;
    }
}

export default modalReducer;