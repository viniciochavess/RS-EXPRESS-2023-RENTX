import { CreateCategoryController } from "../controllers/Create-category-controller";
import { CategoriesRepositories } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/Create-category-service";

export function createCategoryMake(){
    const repo =  new CategoriesRepositories()
    const sut =  new CreateCategoryService(repo)
    const controller = new CreateCategoryController(sut)
    return controller
}