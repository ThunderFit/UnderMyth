import React from 'react';
import _ from "underscore";

import TopLine from "./lines/top"
import BottomLine from "./lines/bottom"
import SkillTreeContainer from '../../containers/tree/skillTree';
import TopButtonsSkills from "../../containers/tree/buttons/skill";
import StartButtonsSkills from "../../containers/tree/buttons/startSkill";

class SkillTree extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        let heveSkillId = !_.isEmpty(this.props.skillTree.id)
        let isPlug = heveSkillId && this.props.skillTree.id !== 'plug';

        return heveSkillId ? (
            <div className={'sb-st-group'} style={this.props.groupStyle}>
                <div className={'sb-st-child'} style={this.props.style}>
                    <TopLine childkey={this.props.childkey} childCount={this.props.childCount}/>
                    <div className={'sb-si-left'}> </div>
                    <div className={'sb-si-center'}>
                        { (isPlug) ? (
                            <TopButtonsSkills skillId={this.props.skillTree.id} skills={this.props.skills}/>
                        ) : (
                            <div className={'sb-bs-plug'}> </div>
                        ) }
                        { (isPlug) ? (
                            <div>
                                <div className={'sb-si-container'}>
                                    <div className={'sb-si-name'}>{this.props.skillInfo.name}</div>
                                    <div className={'sb-si-factor'}>x{this.props.skillInfo.factor}</div>
                                </div>
                                <div className={'sb-si-hover'}>
                                    <div>Всего опыта: {this.props.skillExperience}</div>
                                    <div>От стартового: {this.props.skillInfoState.diffExp||0}</div>
                                    <div> </div>
                                    <StartButtonsSkills skillId={this.props.skillTree.id} skills={this.props.skills}/>
                                </div>
                            </div>
                        ) : (<div className={'sb-si-container-plug'}> </div>) }
                    </div>
                    <div className={'sb-si-right'}> </div>
                    {
                        (!_.isEmpty(this.props.skillTree.bottom)||!_.isEmpty(this.props.skillTree.child)) ? (<BottomLine bottom={this.props.skillTree.bottom||{}}/>) : ('')
                    }
                    {
                        _.map(this.props.skillTree.child, (childTree, key) => {
                            return (
                                <SkillTreeContainer skillTree={childTree} childkey={parseInt(key)} childCount={Object.keys(this.props.skillTree.child).length}/>
                            );
                        })
                    }
                </div>
            </div>
        ) : ('');
    }
}

export default SkillTree;