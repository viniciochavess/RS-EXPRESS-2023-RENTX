import { Category } from "../../../database/entities/Categories"


export interface IRequestCreateRepositoryDTO{
    name:string,
    description:string
}

export interface ICategoresRepository {
    create({description,name}:IRequestCreateRepositoryDTO):Promise<Category | null>
    findByName(name:string):Promise <Category | null>
    list():Promise<Category[] | null>

}