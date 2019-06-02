import React from 'react';
import * as BuildSkill from "../../actions/buildSkillActions";

class ManageOptions extends React.Component {
    constructor(props) {
        super(props);
        this.initEvents();
    }
    initEvents() {
        this.resetSchool = this.resetSchool.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.applySchoolSkillLvl = this.applySchoolSkillLvl.bind(this);
        this.setSchoollSkillsLvl = this.setSchoollSkillsLvl.bind(this);
    }
    resetAll() {
        let action = BuildSkill.resetAll();
        App.getStore('build').dispatch(action);
    }
    resetSchool() {
        this.setSchoollSkillsLvl(0);
    }
    applySchoolSkillLvl(e) {
        let target = document.getElementById('input-set-school-lvl');
        this.setSchoollSkillsLvl(target.value);
    }
    applyAllSchoolSkillLvl(e) {
        let target = document.getElementById('input-set-all-school-lvl');
        let action = BuildSkill.setAllSchoollSkillsLvl(target.value);
        App.getStore('build').dispatch(action);
    }
    setSchoollSkillsLvl(lvl) {
        let action = BuildSkill.setSchoollSkillsLvl(this.props.school.selectedSchool, lvl);
        App.getStore('build').dispatch(action);
    }
    validateSkillLvl(e) {
        let value = (parseInt(e.target.value) || 0);
        let realValue = (value >= 0) ? ((value <= 200) ? value : 200 ) : 0;
        e.target.value = realValue;
    }

    render() {
        return (
            <div className={'sb-mo-main'}>
                <div className={"sb-mo-block-container floatleft"}>
                    Все навыки <input className="sb-mo-input" id={'input-set-all-school-lvl'}  type="text" maxLength="3" onChange={this.validateSkillLvl}/> уровня
                    <button className="sb-mo-apply" onClick={this.applyAllSchoolSkillLvl}>v</button>
                </div>
                <div className={"sb-mo-block-container floatleft"}>
                    Школа <input className="sb-mo-input" id={'input-set-school-lvl'} type="text" maxLength="3" onChange={this.validateSkillLvl}/> уровня
                    <button className="sb-mo-apply" onClick={this.applySchoolSkillLvl}>v</button>
                </div>
                <div className={"sb-mo-block-container floatleft"}>
                    <button className="sb-mo-clear" onClick={this.resetAll}>Очистить все</button>
                </div>
                <div className={"sb-mo-block-container floatleft"}>
                    <button className="sb-mo-clear" onClick={this.resetSchool}>Очистить школу</button>
                </div>
            </div>
        )
    }
}

export default ManageOptions;