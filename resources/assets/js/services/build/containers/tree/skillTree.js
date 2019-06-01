import React from 'react';

import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { BuildSkill } from "../../actions";
import SkillTreeComponent from '../../components/tree/skillTree';

const MapToState = (state, context) => {
    let compState = App.makeNewState(state, {});
    compState['skillExperience'] = !_.isUndefined(state.skills[context.skillTree.id]) ? state.skills[context.skillTree.id].exp : 0;
    return compState;
};

const MapToProps = (dispatch, props) => {
    let groupStyle = props.skillTree.groupStyle || {};
    let childCount = props.childCount || 1;
    return {
        actions: bindActionCreators(BuildSkill, dispatch),
        skillTree: props.skillTree,
        skillInfo: App.getStorage('build').getSkill(props.skillTree.id) || {},
        childkey: props.childkey || 0,
        childCount: childCount,
        style: props.skillTree.style || {},
        groupStyle: App.makeNewState({'width': (100 / childCount) + '%'}, groupStyle),
    }
};

export default connect(MapToState, MapToProps, )(SkillTreeComponent);