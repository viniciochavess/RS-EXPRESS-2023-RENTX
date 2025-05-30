
import { ICategoresRepository, IRequestCreateRepositoryDTO } from './ICategoriesRepository';
import { Category } from '../../../database/entities/Categories';
import { prisma } from '../../../database/prisma';

export class CategoriesRepositories implements ICategoresRepository {
    
    async create({ description, name }: IRequestCreateRepositoryDTO):Promise <Category | null> {
        const category = await prisma.category.create({data:{
            description,
            name
        }})
        return category
    }
    async findByName(name: string):Promise<Category | null> {
        const category = await prisma.category.findFirst({
            where:{name}
        })
        return category ?? null
    }
    async list(): Promise<Category[] | null> {
       
        const categories = await prisma.category.findMany()
        return categories
    }
 
}
