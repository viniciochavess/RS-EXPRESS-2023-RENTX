import { RepositoriesUsers } from "../repositories/RepositoriesUsers"

interface IRequest {
    user_id:string,
    avatar_file:string,
}

export class UpdateUserAvatarService{
    constructor(private repo:RepositoriesUsers){}
    async execute({avatar_file,user_id}:IRequest){
    
        await this.repo.updateAvatarFile(avatar_file,user_id)

        return user_id
    }
}