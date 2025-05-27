import {Router} from 'express'
import { Category } from '../module/cars/model/Category'
import { CategoriesRepositories } from '../module/cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../module/cars/services/Create-category-service'




export const categoriesRoutes = Router()

const categories:Category[] = []
const categoriesRepository = new CategoriesRepositories()
const createCategoryService = new CreateCategoryService(categoriesRepository)
categoriesRoutes.post("", async (request, response) =>{
    const {name, description} = request.body;
   
    try {
        await createCategoryService.execute({description,name})
        response.status(200).send("created")
    } catch (error) {
        response.status(400).send(error)
    }
    

    response.status(201).send()

})


categoriesRoutes.get("", (request, response) =>{

    response.json(categoriesRepository.list())
    
})