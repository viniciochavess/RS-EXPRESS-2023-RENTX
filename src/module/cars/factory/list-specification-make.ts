import { CreateSpecificationController } from "../controllers/create-specification-controller";
import { SpecificationsRepository } from "../repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../services/create-specification-service";

export function listSpecificationMake(){
    const repo = new SpecificationsRepository()
    const sut = new CreateSpecificationService(repo)
    const cont = new CreateSpecificationController(sut)
    return cont
}