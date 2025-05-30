import { ISpecificationRepository, IRequestCreateSpecificationDTO } from "../repositories/ISpecificationRepository"
export class CreateSpecificationService {
    constructor( private specificationRepository:ISpecificationRepository){}
   async execute({name,description}:IRequestCreateSpecificationDTO){
        const specificationAlwaredExist = await this.specificationRepository.findByName(name)
      
        if (specificationAlwaredExist) throw new Error("Especificação já existe")
        const specification = await this.specificationRepository.create({description,name})
        return {
            specification
        }
    }
}