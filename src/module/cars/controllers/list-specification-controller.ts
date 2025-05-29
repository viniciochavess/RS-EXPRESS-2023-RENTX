import { Request, Response } from "express";
import { ListSpecificationService } from "../services/list-specification-service";

export class ListSpecificationController{
    constructor(private sut:ListSpecificationService){}
    handle(request:Request,response:Response){
        const list = this.sut.execute();
        return list
    }
}