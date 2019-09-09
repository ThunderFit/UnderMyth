import AbstractStorage from './abstract';
import schools from './const/schools'
import skills from './const/skills'

export default class SkillSchoolsStorage extends AbstractStorage {
    constructor() {
        super();
        let storage = {};

        _.each(schools, function (schoolInfo, schoolName) {
            _.each(schoolInfo.skills, function (skillInfo, skillid) {
                storage[skillid] = schoolName;
            });
        });

        this.storage = storage;
    }
};