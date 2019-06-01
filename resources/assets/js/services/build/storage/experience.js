import AbstractStorage from "./abstract";
import experience from "./const/experience";

export default class ExperienceStorage extends AbstractStorage  {
    constructor() {
        super();
        this.storage = experience;
    }
};