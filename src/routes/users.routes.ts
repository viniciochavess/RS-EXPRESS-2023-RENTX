import { Router } from "express";
import { createUsersMake } from "../module/accounts/user/factory/create-users-make";
import { authenticationMake } from "../module/accounts/user/authentication/factory/authentication-make";
import { AppError } from "../Error/AppError";
import { ensureAuthemticated } from "../module/accounts/user/authentication/middlewares/ensureAuthemticated";
import { UpdateUserAvatarFileController } from "../module/accounts/user/controllers/update-user-avatar-file-controller";
import { UpdateUserAvatarService } from "../module/accounts/user/services/update-users-avatar-service";

export const usersRoutes = Router();
import uploadConfig from '../config/upload'
import multer from "multer";
import { RepositoriesUsers } from "../module/accounts/user/repositories/RepositoriesUsers";
const uploadAvatar = multer(uploadConfig.upload('./temp/avatar'))
usersRoutes.get("/", ()=>{})
usersRoutes.post("/", async (request,response) => {

    try {
        const sut =  createUsersMake()
        const result = await sut.handle(request,response)
         response.status(200).send("criado")

        
    } catch (error) {
         response.status(400).send()
    }
} )


usersRoutes.patch("/avatar", ensureAuthemticated, uploadAvatar.single('avatar') ,async (request,response)=>{
        try {
            
            const repo = new RepositoriesUsers()
            const sut = new UpdateUserAvatarService(repo)
            const control = new UpdateUserAvatarFileController(sut) 
            const result = await control.handle(request,response)
            return result
            
        } catch (error) {
            
        }
})

usersRoutes.post("/authentication",async (request,response)=>{
    try {
        const sut = authenticationMake()
        const result = await sut.handle(request,response)
        response.status(200).json(result)
    } catch (error) {
        if(error instanceof AppError){
            response.status(error.statusCode).json(error)
        }
        
        response.status(500).send('internal error')
    }
})