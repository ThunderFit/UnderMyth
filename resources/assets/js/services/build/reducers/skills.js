import * as types from '../constants/actionTypes';
import * as BuildActions from "../actions";
import _ from 'underscore';

const initialState = {
    'skills': {},
    'schools': {}
};

const makeNewState = (state, params) => (Object.assign({}, state, params));

const getSkillObj = (skillId, lvl, oldSkillState, startLvl = false) => {

    let curLvl = (lvl || 0 === lvl) ? parseInt(lvl) : (oldSkillState.lvl ? oldSkillState.lvl : 0 );
    curLvl = (curLvl <= 0) ? 0 : ((curLvl > 200) ? 200 : curLvl);

    let curStartLvl = (startLvl || 0 === startLvl) ? parseInt(startLvl) : (oldSkillState.startLvl ? oldSkillState.startLvl : 0 );
    curStartLvl = (curStartLvl <= 0) ? 0 : ((curStartLvl > 200) ? 200 : curStartLvl);

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

const getSchoolInfo = (schoolName) => {
    return App.getStorage('build').getStorageByName('Schools').get(schoolName) || {};
};

const getSkillSchool = (skillId) => {
    return App.getStorage('build').getStorageByName('SkillSchools').get(skillId) || {};
};

const getSchools = () => {
    return App.getStorage('build').getStorageByName('Schools').getAll() || {};
};

const calculateHarmony = (schoolInfo, schoolName, newState) => {
    let schoolHarmony = 0;
    let sortHarmony = [];
    let doubleVariations = schoolInfo['skills'] || {};
    _.each(doubleVariations, function (skillInfo, skillId) {
        sortHarmony.push(skillId);
    });
    sortHarmony = sortHarmony.sort( function (firstSkillId, secondSkillId) {
        let firstSkillLvl = (typeof newState.skills[firstSkillId] !== 'undefined' ? newState.skills[firstSkillId].lvl : 0);
        let secondSkillLvl = (typeof newState.skills[secondSkillId] !== 'undefined' ? newState.skills[secondSkillId].lvl : 0);
        return (
            firstSkillLvl < secondSkillLvl
                ? 1
                : ( firstSkillLvl === secondSkillLvl
                    ? 0
                    : -1
                )
        );
    }, newState);
    sortHarmony = _.chunk(sortHarmony, 10)[0];
    _.each(sortHarmony, function (skillId) {
        schoolHarmony += (typeof newState.skills[skillId] !== 'undefined' ? newState.skills[skillId].lvl : 0);
    }, newState);
    schoolHarmony = (0 < schoolHarmony) ? ( Math.floor(schoolHarmony / 10) ) : 0;

    return makeNewState(newState.schools[schoolName], {'harmony': schoolHarmony});
};

export function skills(state = initialState, action) {
    let newState = makeNewState(state, {});
    let variations = {};
    let doubleVariations = {};
    let oldSkillState = {};
    let schoolInfo = {};
    let schoolName = '';

    switch(action.type) {
        case types.SET_SKILL_LVL:
            oldSkillState = state.skills[action.skill] || {};
            newState.skills[action.skill] = getSkillObj(action.skill, action.lvl, oldSkillState);
            schoolName = getSkillSchool(action.skill);
            schoolInfo = getSchoolInfo(schoolName);
            if (schoolInfo.magic) {
                newState.schools[schoolName] = calculateHarmony(schoolInfo, schoolName, newState);
            }
            break;
        case types.SET_START_SKILL_LVL:
            oldSkillState = state.skills[action.skill] || {};
            newState.skills[action.skill] = getSkillObj(action.skill, false, oldSkillState, action.lvl);
            break;
        case types.SET_SCHOOL_LVL:
            schoolInfo = getSchoolInfo(action.schoolName);
            doubleVariations = schoolInfo['skills'] || {};
            _.each(doubleVariations, function (skillInfo, skillId) {
                oldSkillState = state.skills[skillId] || {};
                newState.skills[skillId] = getSkillObj(skillId, action.lvl, oldSkillState);
            });
            if (schoolInfo.magic) {
                newState.schools[action.schoolName] = calculateHarmony(schoolInfo, action.schoolName, newState);
            }
            break;
        case types.SET_ALL_SCHOOL_LVL:
            variations = getSchools();
            _.each(variations, function (schoolInfo, schoolName) {
                doubleVariations = schoolInfo['skills'] || {};
                _.each(doubleVariations, function (skillInfo, skillId) {
                    oldSkillState = state.skills[skillId] || {};
                    newState.skills[skillId] = getSkillObj(skillId, action.lvl, oldSkillState);
                });
                if (schoolInfo.magic) {
                    newState.schools[schoolName] = calculateHarmony(schoolInfo, schoolName, newState);
                }
            });

            break;
        case types.RESET_ALL:
            newState = initialState;
            break;
        case types.SET_STATE:
            if (
                typeof action.state !== 'undefined'
                && action.state !== null
                && typeof action.state.skills !== 'undefined'
            ) {
                return makeNewState(state, action.state.skills);
            }
        default:
            break;
    }
    return newState;
}