import { ICategoresRepository } from "../repositories/ICategoriesRepository";

export class ListCategoryService{
    constructor(private repo:ICategoresRepository){}
    execute(){
        const list = this.repo.list()
        return{
            list
        }
    }
}