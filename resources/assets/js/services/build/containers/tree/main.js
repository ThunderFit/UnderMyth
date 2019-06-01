import React from 'react';
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";

import { BuildSkill } from "../../actions";
import MainTree from '../../components/tree/main';

const MapToState = (state, context) => {
    let compState = App.makeNewState(state, {});
    compState.skillTree = App.getStorage('build').getSkillTree(state.school.selectedSchool);
    return compState;
};

const MapToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(BuildSkill, dispatch),
    };
};

export default connect(MapToState, MapToProps)(MainTree);