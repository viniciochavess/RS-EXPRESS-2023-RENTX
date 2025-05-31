import { prisma } from "../../../../database/prisma";
import { Users } from "../entites/user";
import { IRepositoriesUsers } from "./interface/IRepositoriesUsers";
export interface IUsers{
    drive_license:string,
    name:string,
    password:string,
    username:string
}
export class RepositoriesUsers implements IRepositoriesUsers {
    async create({username,drive_license,name,password}:IUsers): Promise<Users> {
    
         const users = await prisma.users.create({
            data:{
                drive_license,
                name,
                password,
                username,
                

            }
         })
        return users
    }
    async findByUsername(username: string): Promise<Users | null> {
        const userAlwaredExist =  await prisma.users.findFirst({
            where:{username}
        })
        return userAlwaredExist ?? null
    }
    async findByName(name: string): Promise<Users | null> {
        const userAlwaredExist =  await prisma.users.findFirst({
            where:{name}
        })
        return userAlwaredExist ?? null
    }
    async list(): Promise<Users[] | null> {
       const list = await prisma.users.findMany()
       return list ?? null
    }

}