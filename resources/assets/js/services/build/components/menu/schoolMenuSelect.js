import React from 'react';
import _ from "underscore";
import * as BuildActions from "../../actions";

const getSchoolClassName = (selectSchool, name) => {
    let className = 'sb-mt-schools-select-tree-circle-school';
    if (name === 'Chaos') {
        className = className + ' sb-mt-schools-select-tree-circle-school-chaos';
    }
    if (selectSchool === name) {
        className = className + ' sb-selected';
    }
    return className;
};

const getSchoolPosition = (schools, key, type, school) => {
    let typesCircle = {
        'phisical': 2.5,
        'magic': 0,
        'strategy': 0,
    };
    let radius = 90;
    let leftWrap = 60;
    let topWrap = 90;
    var f = 2 / schools.length * (key + 1 + typesCircle[type]) * Math.PI;
    var left = leftWrap + radius * Math.sin(f) + 'px';
    var top = topWrap + radius * Math.cos(f) + 'px';

    return {
        'top': top,
        'left': left,
        'background': "url('/images/icons/" + school + ".png')",
        'background-position': 'center',
        'background-size': 'contain',
    };
};

class SchoolSelectItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let action = BuildActions.BuildSchool.setSchool(event.target.getAttribute('data-name'));
        App.getStore('build').dispatch(action);
    }
    render() {
        let schoolsTree = this.props.schoolsTree;
        let type = this.props.type;
        let selectedSchool = this.props.selectedSchool;
        let self = this;
        return (
            <div className={'sb-mt-schools-select-tree-container'}>
                <div className={'sb-mt-schools-select-tree-circle'}>
                    <div className={'sb-mt-schools-select-tree-center'}><p className={'sb-sc-'+type}>{App.getStorage('build').getLang(type)}</p></div>
                    {
                        (type === 'magic')
                            ? ( <div className={getSchoolClassName(selectedSchool, 'Chaos')} data-name={'Chaos'}  onClick={self.handleChange}>
                                    <div className={'sb-mt-school-hover'}>
                                        {App.getStorage('build').getLang('Chaos')}
                                    </div>
                                    <div className={'sb-mt-schools-harmony'}>{typeof self.props.skills.schools['Chaos'] !== 'undefined'  ? self.props.skills.schools['Chaos'].harmony : ''}</div>
                                </div>)
                            : ('')
                    }
                    {
                        _.map(schoolsTree[type], (school, key) => {
                            return (
                                <div className={getSchoolClassName(selectedSchool, school)} style={getSchoolPosition(schoolsTree[type], key, type, school)} data-name={school}  onClick={self.handleChange}>
                                    <div className={'sb-mt-school-hover'}>
                                        {App.getStorage('build').getLang(school)}
                                    </div>
                                    {
                                        (type === 'magic')
                                        ? (
                                            <div className={'sb-mt-schools-harmony'}>
                                                {typeof self.props.skills.schools[school] !== 'undefined' ? self.props.skills.schools[school].harmony : ''}
                                            </div>
                                            )
                                        : ('')
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SchoolSelectItem;