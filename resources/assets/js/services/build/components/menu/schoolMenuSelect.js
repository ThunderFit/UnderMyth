import React from 'react';
import _ from "underscore";
import * as buildSchoolActions from "../../actions/buildSchoolActions";

class SchoolSelectItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let action = buildSchoolActions.setSchool(event.target.getAttribute('data-name'));
        App.getStore('build').dispatch(action);
    }
    getStyle(schools, key, type, selectSchool) {

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

        let styles = {
            'position': 'absolute',
            'top': top,
            'left': left
        };
        if (selectSchool) {
            styles['background-color'] = 'lightgray';
        }
        return styles;
    }
    getStyleChaos(selectSchool) {
        let styles = {
            'position': 'absolute',
            'top': '90px',
            'left': '60px'
        };
        if (selectSchool) {
            styles['background-color'] = 'lightgray';
        }
        return styles;
    }
    render() {
        let schoolsTree = this.props.schoolsTree;
        let type = this.props.type;
        let selectedSchool = this.props.selectedSchool;
        let self = this;
        return (
            <div className={'sb-mt-schools-select-tree-container'}>
                <div className={'sb-mt-schools-select-tree-circle'}>
                    <div className={'sb-mt-schools-select-tree-center'}><p className={'sb-sc-'+type}>{type}</p></div>
                    {
                        (type === 'magic')? (<div className={'sb-mt-schools-select-tree-circle-school'} style={self.getStyleChaos((selectedSchool === 'Chaos'))} data-name={'Chaos'}  onClick={self.handleChange}>{'Chaos'}</div>) : ('')
                    }
                    {
                        _.map(schoolsTree[type], (school, key) => {
                            let selected = selectedSchool === school;
                            let styles = self.getStyle(schoolsTree[type], key, type, selected);
                            return <div className={'sb-mt-schools-select-tree-circle-school'} style={styles} data-name={school}  onClick={self.handleChange}>{school}</div>;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SchoolSelectItem;