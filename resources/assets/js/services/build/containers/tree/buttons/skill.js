import React from 'react';

import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { BuildSkill } from "../../../actions";

import TopButtonsSkills from '../../../components/tree/buttons/skill';

const MapToState = (state) => {
    return state;
};

const MapToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(BuildSkill, dispatch),
        skillId: props.skillId,
        skillLvl: !_.isUndefined(props.skills.skills[props.skillId]) ? props.skills.skills[props.skillId].lvl : 0,
    }
};

export default connect(MapToState, MapToProps)(TopButtonsSkills);