import React from 'react';
import _ from "underscore";
import StartButtonsSkills from "../../containers/tree/buttons/startSkill";
import EndButtonsSkills from "../../containers/tree/buttons/skill";

class SkillHover extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let parentProps = this.props.parentProps;
        return (
            <div className={'sb-si-hover-block sb-si-hover-top-container'}>
                <div className={'sb-si-hover-row'}>{App.getStorage('build').getLang(parentProps.skillInfo.code)}</div>
                <div className={'sb-si-hover-row'}>
                    <div className={'sb-si-hover-buttons sb-si-hover-buttons-left'}>
                        {App.getStorage('build').getLang('start_lvl')}
                        <StartButtonsSkills skillId={parentProps.skillTree.id} skills={parentProps.skills}/>
                    </div>
                    <div className={'sb-si-hover-buttons'}>
                        {App.getStorage('build').getLang('end_lvl')}
                        <EndButtonsSkills inputCode={'input-end-skill'} skillId={parentProps.skillTree.id} skills={parentProps.skills}/>
                    </div>
                </div>
                <div className={'sb-si-hover-row'}>{App.getStorage('build').getLang('total_exp')}: {App.getCalculator('build').format(parentProps.skillExperience)}</div>
                <div className={'sb-si-hover-row'}>{App.getStorage('build').getLang('from_start')}: {App.getCalculator('build').format(parentProps.skillInfoState.diffExp||0)}</div>
                <div className={'sb-si-hover-row'}>{App.getStorage('build').getLang('exp_factor')}: x{parentProps.skillInfo.factor}</div>
            </div>
        );
    }
}

export default SkillHover;