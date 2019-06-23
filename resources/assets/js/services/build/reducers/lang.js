import * as types from '../constants/actionTypes';

const initialState = {
    lang: 'ru'
};

const makeNewState = (state, params) => (Object.assign({}, state, params));

export function lang(state = initialState, action) {
    switch(action.type) {
        case types.SET_LANG:
            return makeNewState(state, {lang: action.lang});
    }
    return state;
}