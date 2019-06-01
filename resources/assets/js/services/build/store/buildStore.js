import {createStore, combineReducers} from 'redux';
import * as rootReducers from '../reducers';

export default function BuildStore(initialState) {
    const RootReducers = combineReducers(rootReducers);
    return createStore(RootReducers, initialState);
}