import AbstractStorage from './abstract';
import schoolTree from './const/schoolTree'

export default class SchoolTreeStorage extends AbstractStorage {
    constructor() {
        super();
        this.storage = schoolTree;
    }
};