export default class ExperienceCalculator {
    constructor() {}
    getSkillExp(skillId) {
        let id = parseInt(skillId);
        let skill = App.getStore('build').getState().skills[id];
        return _.isUndefined(skill) ? 0 : skill.exp;

    }
    getByLvl(lvl) {
        var curLvl = parseInt(lvl);
        return App.getStorage('build').getStorageByName('Experience').getInt(curLvl);
    }
    getByLvlFactor(lvl, factor, trueFormat) {
        let needFormat = !_.isUndefined(trueFormat);
        var curFactor = parseInt(factor);
        let result = parseInt(this.getByLvl(lvl)) * curFactor;
        return needFormat ? this.format(result) : result;
    }
    getBySkill(skillId) {
        var curSkillId = parseInt(skillId);
        return this.getSkillExp(curSkillId);
    }
    getBySchool(school, falseFormat) {
        let schoolSkills = App.getStorage('build').getStorageByName('Schools').get(school);

        let totalExp = 0;
        let needFormat = _.isUndefined(falseFormat);
        let self = this;

        _.each((schoolSkills['skills']||{}), function (skill, skillId) {
            totalExp = totalExp + self.getSkillExp(skillId);
        });
        return needFormat ? this.format(totalExp) : totalExp;
    }
    getAllSchool() {
        let schools = App.getStorage('build').getStorageByName('Schools').getAll();
        let totalExp = 0;
        let self = this;
        _.each((schools||{}), function (school, schoolName) {
            totalExp = totalExp + self.getBySchool(schoolName, false);
        });
        return this.format(totalExp);
    }
    format(num) {
        let n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }
};