import {Router} from 'express'
import { createCategoryMake } from '../module/cars/factory/create-category-make'
import { listCategoryMake } from '../module/cars/factory/list-category-make'




export const categoriesRoutes = Router()



const CreateCategoryMake =  createCategoryMake()
const ListCategoryMake = listCategoryMake()
categoriesRoutes.post("", async (request, response) =>{

    try {
        const result  = await CreateCategoryMake.handle(request,response)
        console.log(result)
        response.status(200).send("created")
    } catch (error) {
        response.status(400).send(error)
    }
    

    response.status(201).send()

})


categoriesRoutes.get("", (request, response) =>{
    const list = ListCategoryMake.handle(request,response)
    response.json(list)
    
})