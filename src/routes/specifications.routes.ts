import { Router } from "express";
import { SpecificationsRepository } from "../module/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../module/cars/services/Create-specification-service";

export const specificationRoutes = Router()
const specificationRepository = new SpecificationsRepository()
const createSpecificationService = new CreateSpecificationService(specificationRepository)

specificationRoutes.post("", async (request,response)=>{
    const {name, description} = request.body

    try {
        console.log("puxou")
        const createSpecification = await createSpecificationService.execute({name,description})
        response.status(200).json({
            createSpecification
        })
        
    } catch (error) {
        response.status(400).send(error)
        
    }
})

specificationRoutes.get("", async(request,response)=>{
    response.send("hi")
})