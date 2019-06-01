import * as types from '../constants/actionTypes';

const initialState = {
    selectedSchool: 'Blades'
};

const makeNewState = (state, params) => (Object.assign({}, state, params));

export function school(state = initialState, action) {
    switch(action.type) {
        case types.SET_SCHOOL:
            return makeNewState(state, {selectedSchool: action.school});
    }
    return state;
}