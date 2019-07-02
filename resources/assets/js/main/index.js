import Events from './events/';

class IndexMain {
    constructor () {
        this.Events = new Events();
    }
    init() {
        this.Events.init();
    }
}

export default IndexMain;