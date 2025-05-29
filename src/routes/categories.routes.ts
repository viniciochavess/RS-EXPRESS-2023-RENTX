import {request, Router} from 'express'
import { createCategoryMake } from '../module/cars/factory/create-category-make'
import { listCategoryMake } from '../module/cars/factory/list-category-make'
import multer from 'multer'
import { ImportFileCategoryController } from '../module/cars/controllers/import-file-category-controller'
import { importFileCategoryMake } from '../module/cars/factory/import-file-category-make'



export const categoriesRoutes = Router()

const upload = multer({
    dest:"./tmp"
})

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


categoriesRoutes.post("/import",upload.single("file"),(request,response)=>{
   const controller = importFileCategoryMake()

   try {
       controller.handle(request,response)
       response.send("ok")
    
   } catch (error) {
    
   }
})