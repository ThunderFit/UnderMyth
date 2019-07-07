import * as types from '../constants/actionTypes';

const initialState = {};

export function setState(state = initialState, action) {

    switch(action.type) {
        case types.SET_STATE:
            return state;
    }
    return state;
}