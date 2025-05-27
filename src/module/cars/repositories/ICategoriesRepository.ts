import { Category } from "../model/Category"

export interface IRequestCreateRepositoryDTO{
    name:string,
    description:string
}

export interface ICategoresRepository {
    create({description,name}:IRequestCreateRepositoryDTO):Category | null
    findByName(name:string):Category | null

}