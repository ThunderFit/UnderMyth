import React from 'react';

import { BuildSkill } from "../../../actions";

class StartButtonsSkills extends React.Component {
    constructor(props) {
        super(props);
        this.inputContainerId = 'input-start-skill-' + this.props.skillId;
        this.initEvents();
    }
    initEvents() {
        this.handleChange = this.handleChange.bind(this);
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.getSkillLvl = this.getSkillLvl.bind(this);
        this.setSkillLvl = this.setSkillLvl.bind(this);
    }
    handleChange(e) {
        this.setSkillLvl(this.getSkillLvl(e));
    }
    handleUp(e) {
        this.setSkillLvl(this.getSkillLvl(e) + 1);
    }
    handleDown(e) {
        this.setSkillLvl(this.getSkillLvl(e) - 1);
    }
    getSkillLvl(e){
        let target = document.getElementById(this.inputContainerId);
        return parseInt(target.value) || 0;
    }
    setSkillLvl(lvl) {
        let action = BuildSkill.setStartSkillLvl(this.props.skillId, lvl);
        App.getStore('build').dispatch(action);
    }
    render() {
        return (
            <div className="sb-bs-diff-lvl">
                <div className="sb-bs sb-bs-start">
                    <span className='sb-bs-minus' onClick={this.handleDown}>-</span>
                    <input className='sb-bs-input' id={this.inputContainerId} type="text" maxlength="3" onChange={this.handleChange} value={this.props.skillLvl}/>
                    <span className='sb-bs-after-input'>lvl</span>
                    <span className='sb-bs-plus' onClick={this.handleUp}>+</span>
                </div>
            </div>
        );
    }
}

export default StartButtonsSkills;