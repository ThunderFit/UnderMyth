import React from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

import * as BuildActions from "../../actions";
import ManageOptions from '../../components/manage/options';

const MapToState = (state, context) => {
    return state;
};

const MapToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(BuildActions, dispatch)
    }
};
export default connect(MapToState, MapToProps)(ManageOptions);