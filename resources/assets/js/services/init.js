import _ from "underscore";
import BuildService from './build/init';

export default class Services {
    constructor(props) {
        this.services = {};
    }
    init() {
        this.loadServices();
        _.map(this.services, function (service) {
            service.init();
        });
    }
    push(name, service) {
        this.services[name] = service;
    }
    loadServices() {
        this.push('build', new BuildService());
    }
};