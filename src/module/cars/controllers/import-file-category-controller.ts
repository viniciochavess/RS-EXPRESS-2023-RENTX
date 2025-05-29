import { Request, Response } from "express";
import { ImportFileCategoryService } from "../services/import-file-category-service";

export class ImportFileCategoryController{
    constructor(private sut:ImportFileCategoryService){}
    handle(request:Request,response:Response){
            const {file} = request
            this.sut.execute(file)
    }
}