export default class AbstractStorage {
    constructor() {
        this.storage = {};
    }
    get(key) {
        return this.storage[key] || {};
    }
    getInt(key) {
        return parseInt(this.storage[key]);
    }
    getAll() {
        return this.storage;
    }
}