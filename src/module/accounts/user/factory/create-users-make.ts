import { CreateUserController } from "../controllers/create-users-controller";
import { RepositoriesUsers } from "../repositories/RepositoriesUsers";
import { CreateUserServices } from "../services/create-users-service";

export function createUsersMake(){
    const repo = new RepositoriesUsers()
    const sut = new CreateUserServices(repo)
    const cont = new CreateUserController(sut)
    return cont
}