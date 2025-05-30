import { Router } from "express";
import { SpecificationsRepository } from "../module/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../module/cars/services/create-specification-service";
import { listSpecificationMake } from "../module/cars/factory/list-specification-make";
import { createSpecificationMake } from "../module/cars/factory/create-specification-make";

export const specificationRoutes = Router()


specificationRoutes.post("", async (request,response)=>{
    const {name, description} = request.body

    try {
       
        const createSpecification = await createSpecificationMake()
        const result = await createSpecification.handle(request,response)
        response.status(200).json({
            result
        })
        
    } catch (error) {
        response.status(400).send(error)
        
    }
})

specificationRoutes.get("", async(request,response)=>{
    const list = listSpecificationMake()
    response.json(list)
})