import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className={'sb-im-title'}>Информация</div>
                <div className={'sb-im-exp'}>
                    <div className={'sb-im-exp-total'}>Всего опыта: </div>
                    <div className={'sb-im-exp-total-cur'}>выбранная школа: {this.props.totalSchoolExp}</div>
                    <div className={'sb-im-exp-total-schools'}>все школы: {this.props.totalExp}</div>
                </div>
            </div>
        )
    }
}

export default Main;