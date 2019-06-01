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


export function skills(state = initialState, action) {
    let newState = makeNewState(state, {});

    switch(action.type) {
        case types.SET_SKILL_LVL:
            newState[action.skill] = getSkillObj(action.skill, action.lvl);
            break;
        default:
            break;
    }
    return newState;
}