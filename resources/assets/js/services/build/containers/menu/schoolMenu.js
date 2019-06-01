import React from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

import * as buildActions from "../../actions";
import SchoolMenu from '../../components/menu/schoolMenu';

const MapToState = (state, context) => {
    return state;
};

const MapToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(buildActions, dispatch)
    }
};
export default connect(MapToState, MapToProps)(SchoolMenu);