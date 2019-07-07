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
                <div className={'sb-si-hover-row'}>{parentProps.skillInfo.name}</div>
                <div className={'sb-si-hover-row'}>
                    <div className={'sb-si-hover-buttons sb-si-hover-buttons-left'}>
                        Стартовый уровень
                        <StartButtonsSkills skillId={parentProps.skillTree.id} skills={parentProps.skills}/>
                    </div>
                    <div className={'sb-si-hover-buttons'}>
                        Итоговый уровень
                        <EndButtonsSkills inputCode={'input-end-skill'} skillId={parentProps.skillTree.id} skills={parentProps.skills}/>
                    </div>
                </div>
                <div className={'sb-si-hover-row'}>Всего опыта: {parentProps.skillExperience}</div>
                <div className={'sb-si-hover-row'}>От стартового: {parentProps.skillInfoState.diffExp||0}</div>
                <div className={'sb-si-hover-row'}>Множитель опыта: x{parentProps.skillInfo.factor}</div>
            </div>
        );
    }
}

export default SkillHover;