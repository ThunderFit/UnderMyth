import React from 'react';

import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { BuildSkill } from "../../actions";
import SkillHoverComponent from '../../components/tree/skillHover';

const MapToState = (state, context) => {
    return state;
};

const MapToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(BuildSkill, dispatch),
    };
};

export default connect(MapToState, MapToProps, )(SkillHoverComponent);