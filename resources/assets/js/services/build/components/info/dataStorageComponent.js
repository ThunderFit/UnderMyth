import React from 'react';
import * as BuildActions from "../../actions";

class DataStorageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.initEvents();
    }
    initEvents() {
        this.save = this.save.bind(this);
        this.get = this.get.bind(this);
        this.clear = this.clear.bind(this);
    }
    save() {
        let state = App.getStore('build').getState();
        App.getManager('build').dataStorage.save(state);
    }
    clear() {
        App.getManager('build').dataStorage.clear();
    }
    get() {
        let state = App.getManager('build').dataStorage.get();
        let action = BuildActions.BuildData.setState(state);
        App.getStore('build').dispatch(action);
    }
    render() {
        return (
            <div className={'sb-im-store'}>
                <div className={'sb-im-store-btn'} onClick={this.save}>Save</div>
                <div className={'sb-im-store-btn'} onClick={this.get}>Load</div>
                <div className={'sb-im-store-btn'} onClick={this.clear}>Clear</div>
            </div>
        )
    }
}

export default DataStorageComponent;