import * as types from '../constants/actionTypes';

const initialState = {
    selectedSchool: 'Blades',
    harmony: {}
};

const makeNewState = (state, params) => (Object.assign({}, state, params));

export function school(state = initialState, action) {
    switch(action.type) {
        case types.SET_SCHOOL:
            return makeNewState(state, {selectedSchool: action.school});
        case types.SET_STATE:
            if (typeof action.state !== 'undefined' && action.state !== null && typeof action.state.school !== 'undefined') {
                return makeNewState(state, action.state.school);
            }
            break;
    }
    return state;
}