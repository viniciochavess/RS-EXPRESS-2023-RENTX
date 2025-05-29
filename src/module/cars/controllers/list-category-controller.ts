import { Request, Response } from "express";
import { ListCategoryService } from "../services/list-category-service";

export class ListCategoryController{
    constructor(private sut:ListCategoryService){}
    handle(request:Request,response:Response){
        const list = this.sut.execute();
        return list
    }
}