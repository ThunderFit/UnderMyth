import * as types from '../constants/actionTypes';

const initialState = {};

const makeNewState = (state, params) => (Object.assign({}, state, params));

const getSkillObj = (skillId, lvl, oldSkillState, startLvl = false) => {

    let curLvl = (lvl) ? parseInt(lvl) : (oldSkillState.lvl ? oldSkillState.lvl : 0 );
    curLvl = (curLvl < 0) ? 0 : ((curLvl > 200) ? 200 : curLvl);

    let curStartLvl = (startLvl) ? parseInt(startLvl) : (oldSkillState.startLvl ? oldSkillState.startLvl : 0 );
    curStartLvl = (curStartLvl < 0) ? 0 : ((curStartLvl > 200) ? 200 : curStartLvl);

    let skillFactor = App.getStorage('build').getStorageByName('Skills').get(skillId)['factor'] || 0;
    let experience = App.getCalculator('build').getByLvlFactor(curLvl, skillFactor);
    let forDiffExperience = App.getCalculator('build').getByLvlFactor(curStartLvl, skillFactor);
    let diffExp = experience - forDiffExperience;

    return {
        lvl: curLvl,
        exp: experience,
        startLvl: curStartLvl,
        diffExp: diffExp
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
    let oldSkillState = {};
    switch(action.type) {
        case types.SET_SKILL_LVL:
            oldSkillState = state[action.skill] || {};
            newState[action.skill] = getSkillObj(action.skill, action.lvl, oldSkillState);
            break;
        case types.SET_START_SKILL_LVL:
            oldSkillState = state[action.skill] || {};
            newState[action.skill] = getSkillObj(action.skill, false, oldSkillState, action.lvl);
            break;
        case types.SET_SCHOOL_LVL:
            variations = getSchoolSkills(action.schoolName);
            _.each(variations, function (skillInfo, skillId) {
                oldSkillState = state[skillId] || {};
                newState[skillId] = getSkillObj(skillId, action.lvl, oldSkillState);
            });
            break;
        case types.SET_ALL_SCHOOL_LVL:
            variations = getSchools();
            _.each(variations, function (shcoolInfo, schoolName) {
                doubleVarioations = shcoolInfo['skills'] || {};
                _.each(doubleVarioations, function (skillInfo, skillId) {
                    oldSkillState = state[skillId] || {};
                    newState[skillId] = getSkillObj(skillId, action.lvl, oldSkillState);
                });
            });
            break;
        case types.RESET_ALL:
            newState = {};
            break;
        case types.SET_STATE:
            if (typeof action.state !== 'undefined' && action.state !== null && typeof action.state.skills !== 'undefined') {
                return makeNewState(state, action.state.skills);
            }
        default:
            break;
    }
    return newState;
}