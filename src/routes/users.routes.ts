import { Router } from "express";
import { createUsersMake } from "../module/accounts/user/factory/create-users-make";
import { authenticationMake } from "../module/accounts/user/authentication/factory/authentication-make";
import { AppError } from "../Error/AppError";

export const usersRoutes = Router();

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


usersRoutes.post("/authentication", async (request,response)=>{
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