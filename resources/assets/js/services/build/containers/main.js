import React from 'react';
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import * as buildActions from "../actions";
import MainComponent from '../components/main';

const MapToState = (state, context) => {
    return state;
};

const MapToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(buildActions, dispatch)
    }
};

export default connect(MapToState, MapToProps)(MainComponent);