import * as types from '../constants/actionTypes';

export function setSchool(school) {
    return {
        type: types.SET_SCHOOL,
        school: school
    }
}