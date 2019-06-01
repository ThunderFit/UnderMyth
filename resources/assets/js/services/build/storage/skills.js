import AbstractStorage from './abstract';
import skills from './const/skills'

export default class SkillsStorage extends AbstractStorage {
    constructor() {
        super();
        this.storage = skills;
    }
};