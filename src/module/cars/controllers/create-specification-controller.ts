import { Request, Response } from "express";
import { CreateSpecificationService } from "../services/create-specification-service";

export class CreateSpecificationController{
    constructor(private sut:CreateSpecificationService){}
    handle(request:Request, response:Response){
            const{name,description} = request.body
           const result = this.sut.execute({name,description})
           return result
    }
}