import React from 'react';

import SkillTree from "../../containers/tree/skillTree";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'sb-st-main'}>
                <div className={'sb-st-title'}>{this.props.school.selectedSchool}</div>
                <SkillTree skillTree={this.props.skillTree} childkey={0}/>
            </div>
        )
    }
}

export default Main;