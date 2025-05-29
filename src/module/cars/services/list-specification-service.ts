import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

export class ListSpecificationService{
    constructor(private repo:SpecificationsRepository){}
    execute(){
        const list = this.repo.all()
        return {
            list
        }
    }
}