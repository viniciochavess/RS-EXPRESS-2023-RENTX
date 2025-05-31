import { IRepositoriesUsers } from "../repositories/interface/IRepositoriesUsers";
import { IUsers } from "../repositories/RepositoriesUsers";
import {hash} from 'bcryptjs'

export class CreateUserServices{
    constructor(private repo:IRepositoriesUsers){
    }
    async execute({drive_license,name,password,username}:IUsers){
        const userAlwaredExist = await this.repo.findByUsername(name)
        if(userAlwaredExist){
            throw new Error("usuário já existe")
        }
        const password_hash = await hash(password,8)
        const user = this.repo.create({username,drive_license,name,password:password_hash})
        return user

    }
}