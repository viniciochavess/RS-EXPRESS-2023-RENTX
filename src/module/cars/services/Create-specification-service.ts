import { ISpecificationRepository, IRequestCreateSpecificationDTO } from "../repositories/ISpecificationRepository"
export class CreateSpecificationService {
    constructor( private specificationRepository:ISpecificationRepository){}
    execute({name,description}:IRequestCreateSpecificationDTO){
        const specificationAlwaredExist = this.specificationRepository.findByName(name)
        if (specificationAlwaredExist) throw new Error("Especificação já existe")
        const specification = this.specificationRepository.create({name,description})
        return {
            specification
        }
    }
}