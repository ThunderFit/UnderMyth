import skillTree from './const/skillTree'
import AbstractStorage from "./abstract";

export default class SkillTreeStorage extends AbstractStorage {
    constructor() {
        super();
        this.storage = skillTree;
    }
};