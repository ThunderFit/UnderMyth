import React from 'react';
import _ from "underscore";

import TopLine from "./lines/top"
import BottomLine from "./lines/bottom"
import SkillTreeContainer from '../../containers/tree/skillTree';
import TopButtonsSkills from "../../containers/tree/buttons/skill";
import SkillHover from '../../containers/tree/skillHover';

class SkillTree extends React.Component {
    constructor(props) {
        super(props);
        this.initEvents();
    }
    initEvents() {
        this.displayHover = this.displayHover.bind(this);
        this.closeHover = this.closeHover.bind(this);
    }
    displayHover() {
        $('.sb-si-hover').hide();
        $('#skillHover'+this.props.skillTree.id).show();
    }
    closeHover(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.sb-si-hover').hide();
    }
    render() {

        let heveSkillId = !_.isEmpty(this.props.skillTree.id);
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
                            <div onClick={this.displayHover}>
                                <div className={'sb-si-container'}>
                                    <div style={{'display':'none'}}>
                                        <div className={'sb-si-name'}>{this.props.skillInfo.name}</div>
                                        <div className={'sb-si-factor'}>x{this.props.skillInfo.factor}</div>
                                    </div>
                                    <img style={{'position': 'absolute'}} height={'76px'} width={'76px'} src={"/images/skills/" + this.props.skillInfo.code + "_icon.png"} alt={''} onError={(e)=>{
                                        $(e.target).hide();
                                        $(e.target).prev('div').show();
                                    }}/>
                                </div>
                                <div className={'sb-si-hover sb-si-hover-block'} id={'skillHover' + this.props.skillTree.id}>
                                    <div className={'sb-si-hover-layout'} onClick={this.closeHover}> </div>
                                    <SkillHover parentProps={this.props}/>
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