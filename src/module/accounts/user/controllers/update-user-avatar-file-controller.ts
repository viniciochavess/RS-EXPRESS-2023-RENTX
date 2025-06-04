import { Request, Response } from "express";
import { UpdateUserAvatarService } from "../services/update-users-avatar-service";

export class UpdateUserAvatarFileController{
    constructor(private sut:UpdateUserAvatarService){}
    async handle(request:Request, response:Response){
        const id = request.user?.id
         const avatar_file = request.file?.filename
             

        if(id && avatar_file){
            const sut = await this.sut.execute({avatar_file,user_id:id})
            response.status(200).json(sut)

        }
       
            response.status(400).send()
    }
}