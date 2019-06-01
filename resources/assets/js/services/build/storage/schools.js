import AbstractStorage from './abstract';
import schools from './const/schools'

export default class SchoolsStorage extends AbstractStorage {
    constructor() {
        super();
        this.storage = schools;
    }
};