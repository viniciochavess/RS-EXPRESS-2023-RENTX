import { v4 } from 'uuid'
import { Specification } from '../model/Specification'
import { IRequestCreateSpecificationDTO, ISpecificationRepository } from './ISpecificationRepository'

export class SpecificationsRepository implements ISpecificationRepository{
    private SpecificationRepisitory:Specification[] = []
    constructor(SpecificationRepisitory:Specification [] = []){}

    create({ description, name }: IRequestCreateSpecificationDTO): Specification {
       const newSpecification:Specification = {
        id:v4(),
        name,
        description,
        createdAt: new Date()

       }

       this.SpecificationRepisitory.push(newSpecification)
       return newSpecification
    }
    findByName(name: string): Specification | null {
      const specificationAlwaredExist = this.SpecificationRepisitory.find( specification => specification.name == name)
      return specificationAlwaredExist ? specificationAlwaredExist : null
    }

    
}