import React from 'react';

import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { BuildSkill } from "../../../actions";

import StartButtonsSkills from '../../../components/tree/buttons/startSkill';

const MapToState = (state) => {
    return state;
};

const MapToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(BuildSkill, dispatch),
        skillId: props.skillId,
        skillLvl: !_.isUndefined(props.skills[props.skillId]) ? props.skills[props.skillId].startLvl : 0,
    }
};

export default connect(MapToState, MapToProps)(StartButtonsSkills);