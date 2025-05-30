import { v4 } from 'uuid'
import { Specification } from '../model/Specification'
import { IRequestCreateSpecificationDTO, ISpecificationRepository } from './ISpecificationRepository'
import { prisma } from '../../../database/prisma'

export class SpecificationsRepository implements ISpecificationRepository{

    async create({ description, name }: IRequestCreateSpecificationDTO): Promise<Specification> {
        const newSpecification = await prisma.specification.create({
          data:{
            description,
            name
          }
        })
       return newSpecification
    }
    async findByName(name: string): Promise<Specification | null> {
     const specification =  await prisma.specification.findFirst({
      where:{name}
     })
     return specification ?? null
    }
    async all(): Promise<Specification[]> {
        return await prisma.specification.findMany()
    }

    
}