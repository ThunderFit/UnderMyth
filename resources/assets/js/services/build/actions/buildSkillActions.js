import * as types from '../constants/actionTypes';

function setSkillLvl(skill, lvl) {
    return {
        type: types.SET_SKILL_LVL,
        skill: skill,
        lvl: lvl,
    }
}

export { setSkillLvl };