import React from 'react';
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";

import { BuildSkill } from "../../actions";
import MainInfo from '../../components/info/main';

const MapToState = (state, context) => {
    let compState = App.makeNewState(state, {});
    compState.totalSchoolExp = App.getCalculator('build').getBySchool(state.school.selectedSchool);
    compState.totalExp = App.getCalculator('build').getAllSchool();
    return compState;
};

const MapToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(BuildSkill, dispatch),
    };
};

export default connect(MapToState, MapToProps)(MainInfo);