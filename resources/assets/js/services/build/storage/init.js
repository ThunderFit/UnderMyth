import SchoolsStorage from './schools'
import SchoolTreeStorage from './schoolTree'
import SkillsStorage from './skills'
import SkillTreeStorage from './skillTree'
import ExperienceStorage from "./experience";

export default class buildStorage {
    constructor() {
        this.Schools = new SchoolsStorage();
        this.SkillTree = new SkillTreeStorage();
        this.SchoolTree = new SchoolTreeStorage();
        this.Experience = new ExperienceStorage();
        this.Skills = new SkillsStorage();
    }
    getSchool(name) {
        return this.Schools.get(name);
    }
    getSkillTree(name) {
        return this.SkillTree.get(name);
    }
    getSchoolTreeAll() {
        return this.SchoolTree.getAll();
    }
    getSkill(id) {
        return this.Skills.get(id);
    }
    getStorageByName(name) {
        return this[name] || {};
    }
};