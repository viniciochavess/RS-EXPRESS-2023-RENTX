import { Users } from "../../entites/user"
export interface IRepositoriesUsers{
     create({username,drive_license,name,password}:Users):Promise<Users>
     findByUsername(username:string):Promise<Users | null >
     findByName(name:string):Promise<Users | null >
     list():Promise<Users[] | null>

}