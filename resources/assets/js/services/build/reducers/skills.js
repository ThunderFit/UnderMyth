import * as types from '../constants/actionTypes';

const initialState = {};

const makeNewState = (state, params) => (Object.assign({}, state, params));

const getSkillObj = (skillId, lvl) => {
    let curLvl = parseInt(lvl);
    curLvl = (curLvl < 0) ? 0 : ((curLvl > 200) ? 200 : curLvl);
    let skillFactor = App.getStorage('build').getStorageByName('Skills').get(skillId)['factor'] || 0;
    let experience = App.getCalculator('build').getByLvlFactor(curLvl, skillFactor);
    return {
        lvl: curLvl,
        exp: experience
    };
};

const getSchoolSkills = (schoolName) => {
    return App.getStorage('build').getStorageByName('Schools').get(schoolName)['skills'] || {};
};

const getSchools = () => {
    return App.getStorage('build').getStorageByName('Schools').getAll() || {};
};

export function skills(state = initialState, action) {
    let newState = makeNewState(state, {});
    let variations = {};
    let doubleVarioations = {};
    switch(action.type) {
        case types.SET_SKILL_LVL:
            newState[action.skill] = getSkillObj(action.skill, action.lvl);
            break;
        case types.SET_SCHOOL_LVL:
            variations = getSchoolSkills(action.schoolName);
            _.each(variations, function (skillInfo, skillId) {
                newState[skillId] = getSkillObj(skillId, action.lvl);
            });
            break;
        case types.SET_ALL_SCHOOL_LVL:
            variations = getSchools();
            _.each(variations, function (shcoolInfo, schoolName) {
                doubleVarioations = shcoolInfo['skills'] || {};
                _.each(doubleVarioations, function (skillInfo, skillId) {
                    newState[skillId] = getSkillObj(skillId, action.lvl);
                });
            });
            break;
        case types.RESET_ALL:
            newState = {};
            break;
        default:
            break;
    }
    return newState;
}