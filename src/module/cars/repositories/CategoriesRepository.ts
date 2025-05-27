import {v4 as uuidV4} from 'uuid'
import { ICategoresRepository, IRequestCreateRepositoryDTO } from './ICategoriesRepository'
import { Category } from '../model/Category'
export class CategoriesRepositories implements ICategoresRepository{
    private categories:Category[] = []
    constructor(categories:Category [] = []){}
    create({ description, name }: IRequestCreateRepositoryDTO): Category {
        const newCategory:Category = {
            id: uuidV4(),
            name,
            description,
            createdAt: new Date()
        }
        this.categories.push(newCategory)
        return newCategory
    }

    list():Category[]{
        return this.categories
    }

    findByName(name:string):Category | null{
        const categoryAlwaredExist = this.categories.find( category => category.name == name)
        return categoryAlwaredExist ? categoryAlwaredExist : null
    }

    
    
}