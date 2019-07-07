import * as types from '../constants/actionTypes';

function setState(state) {
    return {
        type: types.SET_STATE,
        state: state,
    }
}

export { setState };