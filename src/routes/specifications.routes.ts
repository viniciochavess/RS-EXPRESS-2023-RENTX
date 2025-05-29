import { Router } from "express";
import { SpecificationsRepository } from "../module/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../module/cars/services/create-specification-service";
import { listSpecificationMake } from "../module/cars/factory/list-specification-make";

export const specificationRoutes = Router()
const specificationRepository =  SpecificationsRepository.getInstance()
const createSpecificationService = new CreateSpecificationService(specificationRepository)

specificationRoutes.post("", async (request,response)=>{
    const {name, description} = request.body

    try {
       
        const createSpecification = await createSpecificationService.execute({name,description})
        response.status(200).json({
            createSpecification
        })
        
    } catch (error) {
        response.status(400).send(error)
        
    }
})

specificationRoutes.get("", async(request,response)=>{
    const list = listSpecificationMake()
    response.json(list)
})