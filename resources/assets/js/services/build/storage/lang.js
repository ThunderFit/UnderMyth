import _ from "underscore";
import AbstractStorage from './abstract';
import lang from './const/lang'

export default class LangStorage extends AbstractStorage {
    constructor() {
        super();
        this.storage = lang;
    }
    get(key) {
        let lang = '';
        if (!_.isUndefined(this.storage[key])) {
            if (!_.isUndefined(this.storage[key][this.getCurrentLang()])) {
                lang = this.storage[key][this.getCurrentLang()];
            }
            if (lang.length === 0 && !_.isUndefined(this.storage[key]['en'])) {
                lang = this.storage[key]['en'];
            }
        }
        return (lang.length === 0) ? key : lang;
    }
    getCurrentLang() {
        return App.getStore('build').getState().lang.lang;
    }
};