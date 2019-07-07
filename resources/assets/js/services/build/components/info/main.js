import React from 'react';
import DataStorageComponent from './dataStorageComponent';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className={'sb-im-title'}>{App.getStorage('build').getLang('info')}</div>
                <DataStorageComponent />
                <div className={'sb-im-exp'}>
                    <div className={'sb-im-exp-total'}>{App.getStorage('build').getLang('total_exp')}: </div>
                    <div className={'sb-im-exp-total-cur'}>{App.getStorage('build').getLang('current_school')}: {this.props.totalSchoolExp}</div>
                    <div className={'sb-im-exp-total-schools'}>{App.getStorage('build').getLang('all_schools')}: {this.props.totalExp}</div>
                </div>
            </div>
        )
    }
}

export default Main;