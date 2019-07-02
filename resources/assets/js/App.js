import _ from "underscore";
import Services from './services/init';
import MainController from './main';

export default class App {
    constructor(props) {
        this.modules = {};
        this.MainController = new MainController();
    }
    init() {
        this.MainController.init();
        this.loadModules();

        _.each(this.modules, function (module, i) {
            module.init();
        });
    }
    push(name, module) {
        this.modules[name] = module;
    }
    loadModules() {

        this.push('services', new Services());
    }
    getStore(name) {
        return this.getServices().services[name].store || false; //emptyStore
    }
    getManager(name) {
        return this.getServices().services[name] || false; //emptyManager
    }
    getStorage(name) {
        return this.getServices().services[name].storage || false; //emptyStorage
    }
    getCalculator(name) {
        return this.getServices().services[name].calculator || false; //emptyStorage
    }
    getServices() {
        return this.modules['services'] || {};
    }
    makeNewState(state, params) {
        return Object.assign({}, state, params);
    }
};