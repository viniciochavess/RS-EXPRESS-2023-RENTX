import { CreateCategoryController } from "../controllers/create-category-controller";
import { CategoriesRepositories } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/create-category-service";

export function createCategoryMake(){
    const repo =  new CategoriesRepositories()
    const sut =  new CreateCategoryService(repo)
    const controller = new CreateCategoryController(sut)
    return controller
}