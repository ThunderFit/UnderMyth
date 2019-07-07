import * as types from '../constants/actionTypes';

const initialState = {
    lang: 'ru'
};

const makeNewState = (state, params) => (Object.assign({}, state, params));

export function lang(state = initialState, action) {
    switch(action.type) {
        case types.SET_LANG:
            return makeNewState(state, {lang: action.lang});
        case types.SET_STATE:
            if (typeof action.state !== 'undefined' && action.state !== null && typeof action.state.lang !== 'undefined') {
                return makeNewState(state, action.state.lang);
            }
    }
    return state;
}