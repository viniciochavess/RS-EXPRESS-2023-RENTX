import { Request, Response } from "express";
import { CreateUserServices } from "../services/create-users-service";

export class CreateUserController{
    constructor(private sut:CreateUserServices){}
    async handle(request:Request, response:Response){
        const {username,password,name,drive_license} =  request.body
      
        const result = await this.sut.execute({drive_license,name,password,username})
        return result
    }
}