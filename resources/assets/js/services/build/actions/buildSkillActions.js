import * as types from '../constants/actionTypes';

function setSkillLvl(skill, lvl) {
    return {
        type: types.SET_SKILL_LVL,
        skill: skill,
        lvl: lvl,
    }
}

function setStartSkillLvl(skill, lvl) {
    return {
        type: types.SET_START_SKILL_LVL,
        skill: skill,
        lvl: lvl,
    }
}

function setSchoollSkillsLvl(schoolName, lvl) {
    return {
        type: types.SET_SCHOOL_LVL,
        schoolName: schoolName,
        lvl: lvl,
    }
}

function setAllSchoollSkillsLvl( lvl) {
    return {
        type: types.SET_ALL_SCHOOL_LVL,
        lvl: lvl,
    }
}

function resetAll() {
    return {
        type: types.RESET_ALL,
    }
}

export { setSkillLvl, setStartSkillLvl, setSchoollSkillsLvl, setAllSchoollSkillsLvl, resetAll };