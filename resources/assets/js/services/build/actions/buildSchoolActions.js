import * as types from '../constants/actionTypes';

function setSchool(school) {
    return {
        type: types.SET_SCHOOL,
        school: school
    }
}

export { setSchool };