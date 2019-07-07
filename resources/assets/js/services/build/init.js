import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import BuildStore from './store/buildStore'
import BuildContainer from './containers/main';
import BuildStorage from './storage/init';
import ExperienceCalculator from './calculations/experienceCalculator';
import DataStorage from './adapter/DataStorage';

export default class BuildService {
    constructor() {
        this.id = 'service-build';
        this.active =  !!this.getContainer();
    }
    getContainer() {
        return document.getElementById(this.id);
    }
    init() {
        if (this.active) {
            this.dataStorage = new DataStorage();
            this.store = BuildStore({school: {selectedSchool: 'Blades'}});
            this.storage = new BuildStorage();
            this.calculator = new ExperienceCalculator();
            this.render();
        }
    }
    render() {
        let Container = this.getContainer();
        if (BuildContainer) {
            ReactDOM.render(
                <Provider store={this.store}>
                    <BuildContainer/>
                </Provider>,
                Container
            );
        }
    }
};