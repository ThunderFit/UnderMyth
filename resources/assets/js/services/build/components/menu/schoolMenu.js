import React from 'react';
import _ from "underscore";
import SchoolSelectItem from './schoolMenuSelect';

class SchoolMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let schoolsTree = App.getStorage('build').getSchoolTreeAll();
        return (
            <div className={'sb-mt-schools-select-tree'}>
                {
                    _.map(schoolsTree, (schools, type) => {
                        return <SchoolSelectItem type={type} schoolsTree={schoolsTree} selectedSchool={this.props.school.selectedSchool}/>;
                    })
                }
            </div>
        )
    }
}

export default SchoolMenu;