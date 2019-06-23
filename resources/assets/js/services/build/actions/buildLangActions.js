import * as types from '../constants/actionTypes';

function setLang(lang) {
    return {
        type: types.SET_LANG,
        lang: lang,
    }
}

export { setLang };