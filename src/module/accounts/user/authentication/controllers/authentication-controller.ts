import { Request, Response } from "express";
import { AuthenticationService } from "../services/authentication-service";

export class AuthenticationController {
    constructor(private sut:AuthenticationService){}
    async handle(request:Request, response:Response){
        const {username, password} = request.body
        return await this.sut.execute({
            username,
            password
        })
    }
}