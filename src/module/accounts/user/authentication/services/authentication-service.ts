import { compareSync } from "bcryptjs";
import { RepositoriesUsers } from "../../repositories/RepositoriesUsers";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../../Error/AppError";

interface IRequest {
    username:string,
    password:string
}

export class AuthenticationService{
    constructor(private repo:RepositoriesUsers){}
    async execute({username,password}:IRequest){
        const usernameAlwaredExist = await this.repo.findByUsername(username);
        if(!usernameAlwaredExist) {throw new AppError("Erro nas credenciais",401)}
        const passwordHashIsMatch = compareSync(password, usernameAlwaredExist.password!)
        if(!passwordHashIsMatch) {throw new Error("Erro nas credenciais")}
        
        const user = usernameAlwaredExist;

        const token =  sign({},"lkajsdkjaksjdlkajsdkajsd",{
            subject: user.id!,
            expiresIn:"1d"
        })
        
        return {
            
            token
        }

    }
}