import { RepositoriesUsers } from "../../repositories/RepositoriesUsers";
import { AuthenticationController } from "../controllers/authentication-controller";
import { AuthenticationService } from "../services/authentication-service";

export function authenticationMake(){
    const repo = new RepositoriesUsers()
    const sut = new AuthenticationService(repo)
    const cont = new AuthenticationController(sut)
    return cont
}