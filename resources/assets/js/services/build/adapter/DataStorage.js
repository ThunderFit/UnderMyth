const KEY = 'buildShadowServices';
class DataStorage {
    constructor() {
    }
    save(state) {
        try {
            localStorage.setItem(KEY, JSON.stringify(state));
        } catch (e) {
            if (e === QUOTA_EXCEEDED_ERR) {
                return false;
            }
        }
        return true;
    }
    get() {
        if (this.isActive()) {
            return JSON.parse(localStorage.getItem(KEY))
        }
        return false;
    }
    clear() {
        localStorage.removeItem(KEY);
        return true;
    }
    isActive() {
        return typeof localStorage !== 'undefined';
    }
}

export default DataStorage;