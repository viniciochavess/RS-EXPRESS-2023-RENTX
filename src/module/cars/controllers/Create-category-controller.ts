import { Request, Response } from 'express';
import {CreateCategoryService} from '../services/create-category-service'
export class CreateCategoryController{
    constructor( private createCategoryService:CreateCategoryService){}
    async handle(request:Request,response:Response){
        const {name,description} = request.body
        const res = await this.createCategoryService.execute({description,name})
    }
}