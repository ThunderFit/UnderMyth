import React from 'react';
import * as BuildActions from "../../actions";

const correctValue = (value) => {
    value = (parseInt(value) || 0);
    return (value >= 0) ? ((value <= 200) ? value : 200 ) : 0;
};

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

        this.setLang = this.setLang.bind(this);
        this.langRu = this.langRu.bind(this);
        this.langEn = this.langEn.bind(this);
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
        this.setSchoollSkillsLvl(correctValue(target.value));
    }
    applyAllSchoolSkillLvl(e) {
        let target = document.getElementById('input-set-all-school-lvl');
        let action = BuildActions.BuildSkill.setAllSchoollSkillsLvl(correctValue(target.value));
        App.getStore('build').dispatch(action);
    }
    setSchoollSkillsLvl(lvl) {
        let action = BuildActions.BuildSkill.setSchoollSkillsLvl(this.props.school.selectedSchool, lvl);
        App.getStore('build').dispatch(action);
    }
    setLang(lang) {
        let action = BuildActions.BuildLang.setLang(lang);
        App.getStore('build').dispatch(action);
    }
    langRu() {
        this.setLang('ru');
    }
    langEn() {
        this.setLang('en');
    }
    validateSkillLvl(e) {
        e.target.value = correctValue(e.target.value);
    }
    activeLangClassName(lang) {
        let className = 'sb-mo-lang';
        return this.props.lang.lang === lang ? className + ' active' : className ;
    }

    render() {
        return (
            <div className={'sb-mo-main'}>
                <div className={"sb-mo-block-container floatleft"}>
                    {App.getStorage('build').getLang('all_skills')}
                    <input className="sb-mo-input" id={'input-set-all-school-lvl'}  type="text" maxLength="3" onChange={this.validateSkillLvl}/> {App.getStorage('build').getLang('lvl_r')}
                    <button className="sb-mo-apply" onClick={this.applyAllSchoolSkillLvl}>{App.getStorage('build').getLang('set')}</button>
                </div>
                <div className={"sb-mo-block-container floatleft"}>
                    {App.getStorage('build').getLang('school')}
                    <input className="sb-mo-input" id={'input-set-school-lvl'} type="text" maxLength="3" onChange={this.validateSkillLvl}/> {App.getStorage('build').getLang('lvl_r')}
                    <button className="sb-mo-apply" onClick={this.applySchoolSkillLvl}>{App.getStorage('build').getLang('set')}</button>
                </div>
                <div className={"sb-mo-block-container floatleft"}>
                    {App.getStorage('build').getLang('clear')}
                    <button className="sb-mo-clear" onClick={this.resetAll}>{App.getStorage('build').getLang('all')}</button>
                    <button className="sb-mo-clear" onClick={this.resetSchool}>{App.getStorage('build').getLang(this.props.school.selectedSchool)}</button>
                </div>
                <div className={"sb-mo-block-container floatright"}>
                    <button className={this.activeLangClassName('ru')} onClick={this.langRu}>Ру</button>
                    <button className={this.activeLangClassName('en')} onClick={this.langEn}>En</button>
                </div>
            </div>
        )
    }
}

export default ManageOptions;