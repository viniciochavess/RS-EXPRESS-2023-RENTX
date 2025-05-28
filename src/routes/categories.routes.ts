import {Router} from 'express'
import { Category } from '../module/cars/model/Category'
import { CategoriesRepositories } from '../module/cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../module/cars/services/Create-category-service'
import { createCategoryMake } from '../module/cars/factory/create-category-make'




export const categoriesRoutes = Router()


const categoriesRepository = new CategoriesRepositories()
const createCategoryService = new CreateCategoryService(categoriesRepository)
const sut =  createCategoryMake()
categoriesRoutes.post("", async (request, response) =>{
    const {name, description} = request.body;
   
    try {
  
       const result  = await sut.handle(request,response)
       console.log(result)
        response.status(200).send("created")
    } catch (error) {
        response.status(400).send(error)
    }
    

    response.status(201).send()

})


categoriesRoutes.get("", (request, response) =>{

    response.json(categoriesRepository.list())
    
})